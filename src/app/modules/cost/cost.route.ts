import { Router } from 'express';
import {
  addNewCost,
  deleteCost,
  getAllCosts,
  getSingleCost,
  updateCost,
} from './cost.controller';
import { JwtVerify } from '../../middlewares/jwtVerify';

const router: Router = Router();

// all costs router
router.get('/costs', JwtVerify, getAllCosts);
router.get('/costs/:id', JwtVerify, getSingleCost);
router.post('/costs', JwtVerify, addNewCost);
router.put('/costs', JwtVerify, updateCost);
router.delete('/costs', JwtVerify, deleteCost);

export default router;
