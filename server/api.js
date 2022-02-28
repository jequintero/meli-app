import { Router } from 'express';
import { all, detailsWithDescriptionById } from './controllers/product';
import { queryParamValidator, productIdValidator } from './middlewares';
const router = new Router();

router.get('/api/items', queryParamValidator('q'), all);
router.get('/api/items/:id', productIdValidator, detailsWithDescriptionById);

export default router;
