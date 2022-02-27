import { Router } from 'express';
import { all } from './controllers/product';
const router = new Router();

router.get('/api/items', all);

export default router;
