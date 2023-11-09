import catchAsync from '../../../shared/carchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const createCategory = catchAsync(async (req, res) => {
  const { ...Category } = req.body;
  const result = await CategoryService.createCategory(Category);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const getAllCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategory();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const getCategory = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await CategoryService.getCategory(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});

const updateCategory = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const { ...updatedCategory } = req.body;

  const result = await CategoryService.updateCategory(id, updatedCategory);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const deleteCategory = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await CategoryService.deleteCategory(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
export const CategoryController = {
  getAllCategory,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
