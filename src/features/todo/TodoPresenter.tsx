import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useFormContext, SubmitHandler, FieldValues } from 'react-hook-form';
import { TodoCardContainer } from './components/TodoCard';
import { TodoType } from './types';
import { AxiosError } from 'axios';

type TodoPresenterProps = {
  handleClickSubmit: SubmitHandler<FieldValues>;
  fetcher: {
    data: TodoType[] | undefined;
    error: AxiosError<unknown, unknown> | undefined;
    isLoading: boolean;
  };
};

export function TodoPresenter(props: TodoPresenterProps) {
  const { handleClickSubmit, fetcher } = props;
  const form = useFormContext();

  return (
    <div className="flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleClickSubmit)}
          className="flex justify-center space-y-8"
        >
          <FormField
            control={form.control}
            name="taskname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>タスク名</FormLabel>
                <FormControl>
                  <Input
                    placeholder="seed freedomを見に行く"
                    {...field}
                    className="w-64"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="ml-2">
            Submit
          </Button>
        </form>
      </Form>

      <div className="mt-10">
        {fetcher.data?.map((todo, index) => (
          <TodoCardContainer key={index} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoPresenter;
