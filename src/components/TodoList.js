import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "../styles.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, id: Date.now() }]);
    setInput(""); // Clear input
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, removing: true } : todo
    );

    setTodos(updatedTodos);

    setTimeout(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, 500); // Delay removal for fade-out animation
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={addTodo}>Add</button>

      {todos.length === 0 ? <p className="no-record">No Record</p> : null}

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
