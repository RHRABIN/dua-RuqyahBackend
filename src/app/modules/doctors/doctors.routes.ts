import express from 'express';
import { DoctorsController } from './doctors.controller';
const router = express.Router();

router.post('/', DoctorsController.createDoctors);
router.get('/', DoctorsController.getAllDoctors);
router.get('/:id', DoctorsController.getDoctors);
router.patch('/:id', DoctorsController.updateDoctors);
router.delete('/:id', DoctorsController.deleteDoctors);

export const DoctorsRoutes = router;
