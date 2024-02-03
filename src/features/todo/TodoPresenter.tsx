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
import { useFormContext } from 'react-hook-form';
import { TodoCardContainer } from './components/TodoCard';
import { TodoType } from './types';
import { AxiosError } from 'axios';
import { TodoFormType } from './types';

/**
 * TODOコンポーネント Props定義
 */
type TodoPresenterProps = {
  onSubmit: (data: TodoFormType) => void;
  fetcher: {
    data: TodoType[] | undefined;
    error: AxiosError<unknown, unknown> | undefined;
    isLoading: boolean;
  };
};

/**
 * TODOコンポーネント プレゼンテーション層
 * @summary 表示を提供する。
 * @param props
 * @returns
 */
export function TodoPresenter(props: TodoPresenterProps) {
  const { onSubmit, fetcher } = props;
  const form = useFormContext<TodoFormType>();

  return (
    <div className="flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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
                    placeholder="タスクを入力してください。"
                    {...field}
                    className="w-64"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="ml-2"
            disabled={!form.formState.isValid || form.formState.isValidating}
          >
            登録
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
