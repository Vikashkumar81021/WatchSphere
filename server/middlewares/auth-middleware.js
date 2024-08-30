import jwt from "jsonwebtoken";
import userModel from "../model/user-model.js";
// Middleware function to protect routes
export const ProtectedRoute = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header is provided
    if (!authHeader) {
      return res.status(401).json({
        message: "Access Denied: No token provided.",
        success: false,
      });
    }

    // Check if the token starts with 'Bearer ' and split it
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach the decoded user information to the request object
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({
      message: "Invalid or expired token.",
      success: false,
    });
  }
};

//admin middleware
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).json({
        message: "Unauthrized Access",
        success: false,
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
