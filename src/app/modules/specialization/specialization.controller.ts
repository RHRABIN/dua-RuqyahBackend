import catchAsync from '../../../shared/carchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SpecializationService } from './specialization.service';

const createSpecialization = catchAsync(async (req, res) => {
  const { ...Specialization } = req.body;
  const result = await SpecializationService.createSpecialization(Specialization);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const getAllSpecialization = catchAsync(async (req, res) => {
  const result = await SpecializationService.getAllSpecialization();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const getSpecialization = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await SpecializationService.getSpecialization(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});

const updateSpecialization = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const { ...updatedSpecialization } = req.body;

  const result = await SpecializationService.updateSpecialization(id, updatedSpecialization);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const deleteSpecialization = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await SpecializationService.deleteSpecialization(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
export const SpecializationController = {
  getAllSpecialization,
  createSpecialization,
  getSpecialization,
  updateSpecialization,
  deleteSpecialization,
};
