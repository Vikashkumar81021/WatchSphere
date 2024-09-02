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
      .json({ message: "Error while creating category", error: error.message });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "category updated successfully",
      category,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating category", error: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    return res.status(200).json({
      message: "All Categories List",
      category,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while getting category", error: error.message });
  }
};
export const getAllSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findById(id);
    return res.status(200).json({
      message: "Get single category Successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while getting single  category",
      error: error.message,
    });
  }
};

export const deleteAllCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "category deleted successfully",
      success: true,
      category,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while delete categoryy",
    });
  }
};
