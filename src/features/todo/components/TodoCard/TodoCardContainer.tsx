import { TodoCarePresenter } from './TodoCarePresenter';
import { useTodoDelete, useTodoPut } from '../../hooks';
import { TodoType } from '../../types';

/**
 * TODOカードコンポーネント Props定義
 */
type TodoCardContainerProps = {
  id: number;
  taskname: string;
  nice: boolean;
};

/**
 * TODOカードコンポーネント コンテナー層
 * @summary ロジックを提供する。
 * @returns
 */
export function TodoCardContainer(props: TodoCardContainerProps) {
  const { id, taskname, nice } = props;
  const deleteTodo = useTodoDelete();
  const updateTodo = useTodoPut();

  /**
   * 削除ボタンクリックイベントハンドラー
   * @param id number
   */
  const handleClickDelete = (id: number) => {
    deleteTodo.trigger(id);
  };

  /**
   * いいねボタンクリックイベントハンドラー
   * @param value
   */
  const handleClickUpdate = (value: TodoType) => {
    updateTodo.trigger(value);
  };

  return (
    <TodoCarePresenter
      id={id}
      taskname={taskname}
      nice={nice}
      handleClickDelete={handleClickDelete}
      handleClickUpdate={handleClickUpdate}
    />
  );
}

export default TodoCardContainer;
