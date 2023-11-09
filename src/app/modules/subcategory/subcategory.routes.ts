import express from 'express';
import { SubcategoryController } from './subcategory.controller';
const router = express.Router();

router.post('/', SubcategoryController.createSubcategory);
router.get('/', SubcategoryController.getAllSubcategory);
router.get('/:id', SubcategoryController.getSubcategory);
router.patch('/:id', SubcategoryController.updateSubcategory);
router.delete('/:id', SubcategoryController.deleteSubcategory);

export const SubCategoryRoutes = router;
