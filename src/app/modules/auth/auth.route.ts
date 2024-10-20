import { Router } from 'express';
import { login } from './auth.controller';

const router: Router = Router();

router.get('/login', login);

export default router;
