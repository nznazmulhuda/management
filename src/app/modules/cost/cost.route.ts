import { Router } from 'express';
import { addNewCost, getAllCosts, getSingleCost } from './cost.controller';
import { JwtVerify } from '../../middlewares/jwtVerify';

const router: Router = Router();

// all costs router
router.get('/costs', JwtVerify, getAllCosts);
router.get('/costs/:id', JwtVerify, getSingleCost);
router.post('/costs', JwtVerify, addNewCost);

export default router;
