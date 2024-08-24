import userModel from "../model/user-model.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;

    if (
      [name, email, password, address, phone].some((field) => !field?.trim())
    ) {
      return res.status(400).json({
        message: "All fields are required and must not be empty.",
        success: false,
      });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        message: "User already exist",
        success: true,
      });
    }
    const createUser = await new userModel({
      name,
      email,
      address,
      password,
      phone,
    }).save();
    return res.status(201).json({
      message: "User Register successfully",
      success: true,
      createUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      success: false,
      error,
    });
  }
};

//login
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required.",
      success: false,
    });
  }
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    // Compare the provided password with the stored hashed password
    const isMatchPassword = await user.comparePassword(password);
    if (!isMatchPassword) {
      return res.status(401).json({
        message: "invalid user credentails",
        success: false,
      });
    }

    //geneate token
    const token = await user.generateToken();
    // If password matches, return success response with the token
    return res.status(200).json({
      message: "Login successful",
      success: true,
      token, // Include the generated token in the response
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while logging in.",
      success: false,
      error: error.message,
    });
  }
};
