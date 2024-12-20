import Button from "../Button";
import "../../styles/TodoItem.css"


export default function TodoItem ({ task, removeTask, toggleComplete }) {
  return (
    <li className="item-container">
      <span className="item-text"
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <div>
        <Button onClick={toggleComplete} className="complete-button">{task.completed ? "Undo" : "Mark Complete"}</Button>
        <Button onClick={removeTask} className="remove-button">Remove</Button>
      </div>
    </li>
  );
};