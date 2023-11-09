import catchAsync from '../../../shared/carchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DoctorsService } from './doctors.service';

const createDoctors = catchAsync(async (req, res) => {
  const { ...Doctors } = req.body;
  const result = await DoctorsService.createDoctors(Doctors);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const getAllDoctors = catchAsync(async (req, res) => {
  const result = await DoctorsService.getAllDoctors();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    meta: result.meta,
    data: result.data,
  });
});
const getDoctors = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await DoctorsService.getDoctors(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});

const updateDoctors = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const { ...updatedDoctors } = req.body;

  const result = await DoctorsService.updateDoctors(id, updatedDoctors);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
const deleteDoctors = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await DoctorsService.deleteDoctors(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});
export const DoctorsController = {
  getAllDoctors,
  createDoctors,
  getDoctors,
  updateDoctors,
  deleteDoctors,
};
