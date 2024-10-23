import { Router } from 'express';
import { filterByName } from './filter.controller';

const router: Router = Router();

// all routes
router.get('/filter/:name', filterByName);

export default router;
