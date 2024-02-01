import { z } from 'zod';

export const todoFormSchema = z.object({
  taskname: z.string().min(1, {
    message: '必須項目です',
  }),
});
