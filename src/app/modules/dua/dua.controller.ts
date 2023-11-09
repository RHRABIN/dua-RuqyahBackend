import catchAsync from '../../../shared/carchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DuaService } from './dua.service';
import fs from 'fs';
import csv from 'csv-parser';
import prisma from '../../../shared/prisma';

const createDua = catchAsync(async (req, res) => {

  if (!req.file) {
    res.status(400).send('No file uploaded.');
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results: any[] = [];
  const fileStream = fs.createReadStream(req.file.path);

  fileStream
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      results.forEach(async (singleData) => {
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        const { id, ...othersData } = singleData;
        try {
          await prisma.dua.create({
            data: {
              ...othersData,
              // id: parseInt(singleData.id),
              cat_id: parseInt(othersData.cat_id),
              subcat_id: parseInt(othersData.subcat_id),
              dua_id: parseInt(othersData.dua_id),
            },
          });
        } catch (error) {
          console.error(error);
        }
      });

      if (req.file) fs.unlinkSync(req.file.path)

      // res.send('Data uploaded successfully!');
    });


  // const { ...Dua } = req.body;
  // const result = await DuaService.createDua(Dua);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: ["success"],
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
