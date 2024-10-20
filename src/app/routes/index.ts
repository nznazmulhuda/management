import { Request, Response, Router } from 'express';

const router = Router();

const moduleRoutes: {
  path: string;
  route: (req: Request, res: Response) => void;
}[] = [
  {
    path: '/sell',
    route: (req, res) => res.send('Coming soon'),
  },
  {
    path: '/cost',
    route: (req, res) => res.send('Coming soon'),
  },
  {
    path: '/dashboard',
    route: (req, res) => res.send('Coming soon'),
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
