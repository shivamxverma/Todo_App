import React, { useState } from "react";

function Todos() {
  const [Todo, setTodo] = useState([]);
  const [newTodo, setnewTodo] = useState("");

  function handleInputChange(event) {
    setnewTodo(event.target.value);
  }

  function addTask() {
    if (newTodo.trim() !== "") {
      setTodo((t) => [...t, newTodo]);
      setnewTodo("");
    }
  }

  function deleteTask(index) {
    const updatedTodo = Todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTodo = [...Todo];
      [updatedTodo[index], updatedTodo[index - 1]] = [updatedTodo[index - 1], updatedTodo[index]];
      setTodo(updatedTodo);
    }
  }

  function moveTaskDown(index) {
    if (index < Todo.length - 1) {
      const updatedTodo = [...Todo];
      [updatedTodo[index], updatedTodo[index + 1]] = [updatedTodo[index + 1], updatedTodo[index]];
      setTodo(updatedTodo);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          id="inputtodo"
          type="text"
          placeholder="Enter a task"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="inputbtn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {Todo.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ☝️
            </button>
            <button className="down-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todos;
