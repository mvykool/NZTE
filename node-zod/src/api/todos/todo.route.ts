import { Router, Request, Response } from 'express';
import Todo from './todo.model';

const router = Router();

router.get('/', (req: Request, res: Response<Todo[]>) => {
  res.json([{
    content: 'learn typescript',
    done: false,
  }]);
});

export default router;