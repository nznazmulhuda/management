import { Router } from 'express';
import { getAllUser } from './user.controller';

const router: Router = Router();

router.get('/user', getAllUser);

export default router;
