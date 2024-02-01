import { TodoPresenter } from './TodoPresenter';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { todoFormSchema } from './schema';
import { TodoFormType } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTodoFetcher, useTodoPost } from './hooks';

export function TodoContainer() {
  const fetcher = useTodoFetcher();
  const post = useTodoPost();
  const form = useForm<TodoFormType>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      taskname: '',
    },
  });

  const handleClickSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!fetcher.data) return;
    const todoIdList = fetcher.data.map((todo) => todo.id);
    const maxTodoId = Math.max(...todoIdList) + 1;
    await post.trigger({
      id: maxTodoId,
      taskname: data.taskname,
      nice: false,
    });
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <TodoPresenter handleClickSubmit={handleClickSubmit} fetcher={fetcher} />
    </FormProvider>
  );
}

export default TodoContainer;
