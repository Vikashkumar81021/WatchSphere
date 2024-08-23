import jwt from "jsonwebtoken";

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
