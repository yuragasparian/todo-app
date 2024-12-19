import "../styles/TodoItem.css"

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
        <button onClick={toggleComplete} className="complete-button">
          {task.completed ? "Undo" : "Mark Complete"}
        </button>
        <button onClick={removeTask} className="remove-button">
          Remove
        </button>
      </div>
    </li>
  );
};