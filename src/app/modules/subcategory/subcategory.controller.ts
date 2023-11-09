import catchAsync from '../../../shared/carchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { SubcategoryService } from './subcategory.service';

const createSubcategory = catchAsync(async (req, res) => {
  const { ...Subcategory } = req.body;
  const result = await SubcategoryService.createSubcategory(Subcategory);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const getAllSubcategory = catchAsync(async (req, res) => {
  const filters = pick(req.query, ["cat_id"]);
  const result = await SubcategoryService.getAllSubcategory(filters);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    meta: result.meta,
    data: result.data,
  });
});
const getSubcategory = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await SubcategoryService.getSubcategory(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});

const updateSubcategory = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const { ...updatedSubcategory } = req.body;

  const result = await SubcategoryService.updateSubcategory(id, updatedSubcategory);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const deleteSubcategory = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await SubcategoryService.deleteSubcategory(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
export const SubcategoryController = {
  getAllSubcategory,
  createSubcategory,
  getSubcategory,
  updateSubcategory,
  deleteSubcategory,
};
