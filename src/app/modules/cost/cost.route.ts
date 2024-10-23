import { Router } from 'express';
import { getAllCosts } from './cost.controller';
import { JwtVerify } from '../../middlewares/jwtVerify';

const router: Router = Router();

// all costs router
router.get('/costs', JwtVerify, getAllCosts);

export default router;
