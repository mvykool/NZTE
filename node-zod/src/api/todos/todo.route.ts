import { Router } from 'express';
import * as todoHandler from './todo.handler';

const router = Router();

router.get('/', todoHandler.findAll);

export default router;