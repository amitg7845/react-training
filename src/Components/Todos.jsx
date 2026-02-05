import React, { memo } from "react";

function Todos({ todos, addTodo }) {
  console.log("Child render");

  return (
    <div className="useCallback-hooks">
      <h2>Todos List</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Todos);
