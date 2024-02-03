import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TodoType } from '../../types';
import { FaHeart } from 'react-icons/fa';

/**
 * TODOカードコンポーネント Props定義
 */
type TodoCarePresenterProps = {
  id: number;
  taskname: string;
  nice: boolean;
  handleClickDelete: (id: number) => void;
  handleClickUpdate: (value: TodoType) => void;
};

/**
 * TODOカードコンポーネント プレゼンテーション層
 * @summary 表示を提供する。
 * @returns
 */
export function TodoCarePresenter(props: TodoCarePresenterProps) {
  const { id, taskname, nice, handleClickDelete, handleClickUpdate } = props;
  return (
    <Card key={id} className="mb-2 w-[650px]">
      <CardContent className="flex justify-between pt-6">
        <p> {taskname}</p>
        <div className="flex space-x-3 pt-6">
          <FaHeart
            onClick={() =>
              handleClickUpdate({ id: id, taskname: taskname, nice: !nice })
            }
            className={
              nice ? 'size-10 fill-pink-600' : 'size-10  text-gray-300 '
            }
          />
          <Button type="button" onClick={() => handleClickDelete(id)}>
            削除
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default TodoCarePresenter;
