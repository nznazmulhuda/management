import { Router } from 'express';
import {
  filterByName,
  filterByTotalPrice,
  filterMoneyStatus,
  filterOnOrderStatus,
  filterWhoGetOrder,
} from './filter.controller';

const router: Router = Router();

// all routes
router.get('/filterByName/:name', filterByName); // filter by name
router.get('/filterByOrder/:order', filterByTotalPrice); // filter by total price
router.get('/filterByStatus/:status', filterOnOrderStatus); // filter on order status
router.get('/filterByMoney/:moneyStatus', filterMoneyStatus); // filter on money status
router.get('/whoGetTheOrder/:name', filterWhoGetOrder); // filter on who get order

export default router;
