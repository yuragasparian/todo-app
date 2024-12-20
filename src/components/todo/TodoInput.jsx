import { useState } from "react";
import "../../styles/TodoInput.css"
import Button from "../Button";

export default function TodoInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="task-container">
      <input
        type="text"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleAdd} className={"add-task-button"}>Add Task</Button>

    </div>
  );
};
