import express from "express";
import { isAdmin, ProtectedRoute } from "../middlewares/auth-middleware.js";
import { login, register } from "../controller/auth-controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

//protected route
router.get("/user-auth", ProtectedRoute, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
