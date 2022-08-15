import { Router } from 'express';
import { getRoutes } from '@controllers/routes.controller';

const router = Router();

router.get('/routes', getRoutes);

export default router;
