import { TodoCarePresenter } from './TodoCarePresenter';
import { useTodoDelete } from '../../hooks';

type TodoCardContainerProps = {
  id: number;
  taskname: string;
};

export function TodoCardContainer(props: TodoCardContainerProps) {
  const { id, taskname } = props;
  const deleteTodo = useTodoDelete();

  const handleClickDelete = (id: number) => {
    deleteTodo.trigger(id);
  };

  return (
    <TodoCarePresenter
      id={id}
      taskname={taskname}
      handleClickDelete={handleClickDelete}
    />
  );
}

export default TodoCardContainer;
