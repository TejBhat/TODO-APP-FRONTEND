import React from "react";

function TodoItem({ todo, removeTodo }) {
  return (
    <div className={`todo-item ${todo.removing ? "removed" : ""}`} onClick={() => removeTodo(todo.id)}>
      {todo.text}
    </div>
  );
}

export default TodoItem;
