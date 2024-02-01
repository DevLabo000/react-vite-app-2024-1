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
import { useTodoFetcher } from './hooks';

export function TodoContainer() {
  const fetcher = useTodoFetcher();
  const form = useForm<TodoFormType>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      taskname: '',
    },
  });

  const handleClickSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    form.reset();
  };

  console.log('fetcher', fetcher);
  return (
    <FormProvider {...form}>
      <TodoPresenter handleClickSubmit={handleClickSubmit} fetcher={fetcher} />
    </FormProvider>
  );
}

export default TodoContainer;
