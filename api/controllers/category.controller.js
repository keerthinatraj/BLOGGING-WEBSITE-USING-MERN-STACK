import Category from "../models/category.model.js";

export const createCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const newCategory = await Category.create({ name });
    res.status(200).json(newCategory);
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};