import express from "express";
import { isAdmin, ProtectedRoute } from "../middlewares/auth-middleware.js";
import {
  createCategoryController,
  updateCategoryController,
  getAllCategories,
  deleteAllCategories,
  getAllSingleCategory,
} from "../controller/category-controllers.js";
const router = express.Router();
router.post("/category", ProtectedRoute, isAdmin, createCategoryController);
router.put(
  "/update-category/:id",
  ProtectedRoute,
  isAdmin,
  updateCategoryController
);
router.get("/allCategories", getAllCategories);
router.delete(
  "/deleteAllCategories/:id",
  ProtectedRoute,
  isAdmin,
  deleteAllCategories
);
//single category
router.get("/getSingleCategory/:id", getAllSingleCategory);
export default router;
