import { TodoCarePresenter } from './TodoCarePresenter';
import { useTodoDelete, useTodoPut } from '../../hooks';
import { TodoType } from '../../types';

type TodoCardContainerProps = {
  id: number;
  taskname: string;
  nice: boolean;
};

export function TodoCardContainer(props: TodoCardContainerProps) {
  const { id, taskname, nice } = props;
  const deleteTodo = useTodoDelete();
  const updateTodo = useTodoPut();

  const handleClickDelete = (id: number) => {
    deleteTodo.trigger(id);
  };

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
