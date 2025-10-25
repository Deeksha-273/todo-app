import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(""); // To store input value
  const [todos, setTodos] = useState([]); // To store list of tasks

  // Add a new task
  const addTodo = () => {
    if (task.trim() === "") return; // Don't add empty tasks
    setTodos([...todos, { text: task }]); // Add task to todos array
    setTask(""); // Clear input
  };

  // Delete a task by index
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App 📝</h1>

      {/* Input and Add button */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>

      {/* List of tasks */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {todo.text}{" "}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
