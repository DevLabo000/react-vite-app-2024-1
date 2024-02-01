import { TodoCarePresenter } from './TodoCarePresenter';

type TodoCardContainerProps = {
  id: number;
  taskname: string;
};

export function TodoCardContainer(props: TodoCardContainerProps) {
  const { id, taskname } = props;
  return <TodoCarePresenter id={id} taskname={taskname} />;
}

export default TodoCardContainer;
