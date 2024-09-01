import categoryModel from "../model/category-model.js";
import slugify from "slugify";
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).json({
        success: false,
        message: "Category Name is required",
      });
    }
    const exisitingCategory = await categoryModel.findOne({ name });
    if (exisitingCategory) {
      return res.status(200).json({
        message: "category already exists",
        success: true,
      });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).json({
      success: true,
      message: "category created sucessfully",
      category,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating category", error: error.message });
  }
};
