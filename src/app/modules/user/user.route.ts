import { Router } from 'express';
import { getAllUser } from './user.controller';
import { JwtVerify } from '../../middlewares/jwtVerify';

const router: Router = Router();

router.get('/user', JwtVerify, getAllUser);

export default router;
