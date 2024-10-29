import { Router } from 'express';
import { getAllUser, getUserByEmail } from './user.controller';
import { JwtVerify } from '../../middlewares/jwtVerify';

const router: Router = Router();

router.get('/user', JwtVerify, getAllUser);
router.get('/get_user_by_email', getUserByEmail);

export default router;
