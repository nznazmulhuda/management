import { Router } from 'express';
import { filterByName, filterByTotalPrice } from './filter.controller';

const router: Router = Router();

// all routes
router.get('/filterByName/:name', filterByName); // filter by name
router.get('/filterByOrder/:order', filterByTotalPrice); // filter by total price

export default router;
