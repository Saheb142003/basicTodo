import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const maxLim = 100;
  const rem = maxLim - input.length;

  const addtodos = () => {
    const todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    if (input.trim() !== "") {
      setTodos([...todos, todo]);
      setInput("");
    }
  };
  const toggleHandle = (id) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        } else return t;
      })
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return (
    <div>
      <main>
        <h1>Todo App</h1>
        <div className="top">
          <input
            className="input"
            type="text"
            name="todo"
            placeholder="Type here"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div className="topfoot">
            <span style={{ color: "black" }}>{rem} left </span>

            <button onClick={() => addtodos()}>Add</button>
          </div>
        </div>
        {todos.length > 0 && (
          <div className="body">
            <ul>
              {[...todos].reverse().map((t) => [
                <li>
                  <input
                    type="checkbox"
                    onChange={() => {
                      toggleHandle(t.id);
                    }}
                    checked={t.completed}
                  />
                  {/* <span>{t.id}</span> */}
                  <span className={t.completed ? "crossed" : ""}>{t.text}</span>
                  <button onClick={() => deleteTodo(t.id)}>Delete</button>
                </li>,
              ])}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};
export default App;
