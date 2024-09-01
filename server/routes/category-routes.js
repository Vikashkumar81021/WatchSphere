import express from "express";
import { isAdmin, ProtectedRoute } from "../middlewares/auth-middleware.js";
import { createCategoryController } from "../controller/category-controllers.js";
const router = express.Router();
router.post("/category", ProtectedRoute, isAdmin, createCategoryController);

export default router;
