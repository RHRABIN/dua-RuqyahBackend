import express from 'express';
import { DuaController } from './dua.controller';
const router = express.Router();

router.post('/', DuaController.createDua);
router.get('/', DuaController.getAllDua);
router.get('/:id', DuaController.getDua);
router.patch('/:id', DuaController.updateDua);
router.delete('/:id', DuaController.deleteDua);

export const DuaRoutes = router;
