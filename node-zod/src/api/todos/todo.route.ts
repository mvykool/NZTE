import { Router } from 'express';
import * as todoHandler from './todo.handler';

const router = Router();

router.get('/', todoHandler.findAll);
router.post('/', todoHandler.createOne);

export default router;