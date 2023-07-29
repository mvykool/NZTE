import * as z from 'zod';

const Todo = z.object({
  content: z.string(),
});