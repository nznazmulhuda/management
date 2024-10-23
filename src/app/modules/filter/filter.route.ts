import { Router } from 'express';
import {
  filterByName,
  filterByTotalPrice,
  filterMoneyStatus,
  filterOnOrderStatus,
  filterWhoGetOrder,
} from './filter.controller';
import { JwtVerify } from '../../middlewares/jwtVerify';

const router: Router = Router();

// all routes
router.get('/filterByName/:name', JwtVerify, filterByName); // filter by name
router.get('/filterByOrder/:order', JwtVerify, filterByTotalPrice); // filter by total price
router.get('/filterByStatus/:status', JwtVerify, filterOnOrderStatus); // filter on order status
router.get('/filterByMoney/:moneyStatus', JwtVerify, filterMoneyStatus); // filter on money status
router.get('/whoGetTheOrder/:name', JwtVerify, filterWhoGetOrder); // filter on who get order

export default router;
