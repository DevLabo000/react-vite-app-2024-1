import { TodoPresenter } from './TodoPresenter';
import { useForm, FormProvider } from 'react-hook-form';
import { todoFormSchema } from './schema';
import { TodoFormType } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTodoFetcher, useTodoPost } from './hooks';

/**
 * TODOコンポーネント コンテナー層
 * @summary ロジックを提供する。
 * @returns
 */
export function TodoContainer() {
  const fetcher = useTodoFetcher();
  const post = useTodoPost();
  // react-hook-form利用宣言
  const form = useForm<TodoFormType>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      taskname: '',
    },
  });

  /**
   * 登録ボタン押下時のイベントハンドラー
   * @param data
   * @returns
   */
  const onSubmit = async (data: TodoFormType) => {
    if (!fetcher.data) return;
    const todoIdList = fetcher.data.map((todo) => todo.id);
    const maxTodoId = todoIdList.length + 1;
    await post.trigger({
      id: maxTodoId,
      taskname: data.taskname,
      nice: false,
    });
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <TodoPresenter onSubmit={onSubmit} fetcher={fetcher} />
    </FormProvider>
  );
}

export default TodoContainer;
