import { Router } from 'express';
import {
  addSellData,
  allSellData,
  deleteSellData,
  singleSellData,
  updateSellData,
} from './sell.controller';
import { JwtVerify } from '../../middlewares/jwtVerify';

const router: Router = Router();

router.get('/sells', JwtVerify, allSellData); // get all data
router.get('/sell', JwtVerify, singleSellData); // get single data by id
router.post('/sell', JwtVerify, addSellData); // add single data
router.put('/sell', JwtVerify, updateSellData); // update single data
router.delete('/sell', JwtVerify, deleteSellData); // delete single data

export default router;
