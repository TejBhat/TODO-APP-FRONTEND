import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode on initial render if previously selected
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="todo-container">
      <button onClick={toggleDarkMode} style={{ marginBottom: "10px" }}>
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
