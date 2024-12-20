import TodoItem from "./TodoItem";
import "../../styles/TodoList.css"

export default function TodoList  ({ tasks, removeTask, toggleComplete })  {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          removeTask={() => removeTask(index)}
          toggleComplete={() => toggleComplete(index)}
        />
      ))}
    </ul>
  );
};

