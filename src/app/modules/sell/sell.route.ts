import { Router } from 'express';
import { allSellData, singleSellData } from './sell.controller';
import { JwtVerify } from '../../middlewares/jwtVerify';

const router: Router = Router();

router.get('/sells', JwtVerify, allSellData);
router.get('/sell', JwtVerify, singleSellData);

export default router;
