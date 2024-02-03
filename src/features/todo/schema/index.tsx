import { z } from 'zod';

/**
 * TODOフォームスキーマ定義
 * @summary zodを利用しスキーマを定義する。
 */
export const todoFormSchema = z.object({
  taskname: z.string().min(1, {
    message: '必須項目です',
  }),
});
