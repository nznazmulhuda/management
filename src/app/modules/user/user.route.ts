import { Router } from 'express';
import { getAllUser, getUserByEmail } from './user.controller';
import { JwtVerify } from '../../middlewares/jwtVerify';
import { User } from './user.model';
import { TUser } from './user.interface';

const router: Router = Router();

router.get('/user', JwtVerify, getAllUser);
router.get('/get_user_by_email', getUserByEmail);
router.post('/user', async (req, res) => {
  const data: TUser = req.body;
  const user = await new User(data).save();

  res.send(user);
});

export default router;
