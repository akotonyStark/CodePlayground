import "./styles.css";
import React, { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleAddItem = (task) => {
    let item = {
      id: Math.floor(Math.random() * 100000),
      name: task,
      complete: false
    };
    setTodos([...todos, item]);
  };

  const toggleItem = (item) => {
    let mapped = todos.map((todo) => {
      return todo.id === item.id
        ? { ...todo, complete: !item.complete }
        : { ...todo };
    });
    setTodos(mapped);
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => handleAddItem(task)}>Add</button>

      <div>
        {todos.map((task) => (
          <ul
            key={task.id}
            className={task.complete ? "checked" : "unchecked"}
            onClick={() => toggleItem(task)}
          >
            {task.id}-{task.name}
          </ul>
        ))}
      </div>
      <div>
        {todos.filter((item) => item === !item.complete).length} - incomplete
      </div>
    </div>
  );
}
