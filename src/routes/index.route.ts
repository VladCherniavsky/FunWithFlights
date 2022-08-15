import { Router } from 'express';
import { index } from '@controllers/index.controller';

const path = '/';
const router = Router();

router.get(`${path}`, index);
export default router;
