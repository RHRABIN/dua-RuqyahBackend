import express from 'express';
import { SpecializationController } from './specialization.controller';
const router = express.Router();

router.post('/', SpecializationController.createSpecialization);
router.get('/', SpecializationController.getAllSpecialization);
router.get('/:id', SpecializationController.getSpecialization);
router.patch('/:id', SpecializationController.updateSpecialization);
router.delete('/:id', SpecializationController.deleteSpecialization);

export const SpecializationRoutes = router;
