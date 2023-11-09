import express from 'express';
import { DataController } from './data.controller';
const router = express.Router();

router.post('/', DataController.createData);
router.get('/', DataController.getAllData);
router.get('/:id', DataController.getData);
router.patch('/:id', DataController.updateData);
router.delete('/:id', DataController.deleteData);

export const DataRoutes = router;
