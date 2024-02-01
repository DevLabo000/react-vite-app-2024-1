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

export function TodoContainer() {
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

  return (
    <FormProvider {...form}>
      <TodoPresenter handleClickSubmit={handleClickSubmit} />
    </FormProvider>
  );
}

export default TodoContainer;
