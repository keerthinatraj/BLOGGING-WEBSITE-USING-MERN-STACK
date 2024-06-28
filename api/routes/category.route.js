import express from "express";
import { createCategory, getAllCategories } from "../controllers/category.controller.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/getcategories", getAllCategories);

export default router;