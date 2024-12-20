import React, { useState, useEffect } from "react";
import {TodoInput, TodoList} from "./index";
import "./styles/App.css"

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="main">
      <h1 className="header">Todo App</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        removeTask={removeTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
