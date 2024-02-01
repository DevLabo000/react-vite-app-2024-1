import { z } from 'zod';
import { todoFormSchema } from '../schema';

export type TodoFormType = z.infer<typeof todoFormSchema>;

export type TodoType = {
  id: number;
  taskname: string;
  nice: boolean;
};
