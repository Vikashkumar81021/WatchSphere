import express from "express";
import { isAdmin, ProtectedRoute } from "../middlewares/auth-middleware.js";
import {
  login,
  register,
  forgotPassword,
} from "../controller/auth-controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
//forgot-password
router.post("/forgot-password", forgotPassword);
//protected User route
router.get("/user-auth", ProtectedRoute, (req, res) => {
  res.status(200).send({ ok: true });
});
//Protected admin route
router.get("/admin-auth", ProtectedRoute, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
