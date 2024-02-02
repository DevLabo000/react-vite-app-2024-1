import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type TodoCarePresenterProps = {
  id: number;
  taskname: string;
  handleClickDelete: (id: number) => void;
};

export function TodoCarePresenter(props: TodoCarePresenterProps) {
  const { id, taskname, handleClickDelete } = props;
  return (
    <Card key={id} className="mb-2 w-[650px]">
      <CardContent className="flex justify-between pt-6">
        <p> {taskname}</p>
        <div>
          <Button type="button" onClick={() => handleClickDelete(id)}>
            削除
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default TodoCarePresenter;
