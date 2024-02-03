import { z } from 'zod';
import { todoFormSchema } from '../schema';

/**
 * TODO FORM TYPE定義
 */
export type TodoFormType = z.infer<typeof todoFormSchema>;

/**
 * TODO定義
 */
export type TodoType = {
  id: number;
  taskname: string;
  nice: boolean;
};

/**
 * Deleteパラメーター定義
 */
export type TodoDeleteParamType = {
  id: number;
};
