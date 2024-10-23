import { Router } from 'express';
import {
  filterByName,
  filterByTotalPrice,
  filterOnOrderStatus,
} from './filter.controller';

const router: Router = Router();

// all routes
router.get('/filterByName/:name', filterByName); // filter by name
router.get('/filterByOrder/:order', filterByTotalPrice); // filter by total price
router.get('/filterByStatus/:status', filterOnOrderStatus); // filter on order status

export default router;
