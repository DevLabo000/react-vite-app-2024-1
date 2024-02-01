import { Card, CardContent } from '@/components/ui/card';

type TodoCarePresenterProps = {
  id: number;
  taskname: string;
};

export function TodoCarePresenter(props: TodoCarePresenterProps) {
  const { id, taskname } = props;
  return (
    <Card key={id} className="mb-2 w-[500px]">
      <CardContent className="pt-6">
        <p> {taskname}</p>
      </CardContent>
    </Card>
  );
}

export default TodoCarePresenter;
