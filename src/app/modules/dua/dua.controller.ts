import catchAsync from '../../../shared/carchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DuaService } from './dua.service';

const createDua = catchAsync(async (req, res) => {
  const { ...Dua } = req.body;
  const result = await DuaService.createDua(Dua);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const getAllDua = catchAsync(async (req, res) => {
  const result = await DuaService.getAllDua();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const getDua = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await DuaService.getDua(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});

const updateDua = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const { ...updatedDua } = req.body;

  const result = await DuaService.updateDua(id, updatedDua);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const deleteDua = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await DuaService.deleteDua(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
export const DuaController = {
  getAllDua,
  createDua,
  getDua,
  updateDua,
  deleteDua,
};
