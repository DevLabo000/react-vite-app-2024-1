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
// import { TodoFormType } from './types';
import { useFormContext, SubmitHandler, FieldValues } from 'react-hook-form';

type TodoPresenterProps = {
  handleClickSubmit: SubmitHandler<FieldValues>;
};

export function TodoPresenter(props: TodoPresenterProps) {
  const { handleClickSubmit } = props;
  const form = useFormContext();

  return (
    <>
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
    </>
  );
}

export default TodoPresenter;
