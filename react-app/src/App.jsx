import { useState } from "react";
import "./App.css";
function App() {
  let [todoInput, updateInput] = useState("");
  let [todoList, updateTodos] = useState([
    {
      id: 1,
      task: "Learn React",
    },
    {
      id: 2,
      task: "Learn PC",
    },
  ]);
  let nextId = 3;
  function addNewTodo() {
    if (todoInput == "") {
      alert("Add some task");
    } else {
      let newTodos = [
        ...todoList,
        {
          id: nextId++,
          task: todoInput,
        },
      ];
      updateTodos(newTodos);
      updateInput("");
    }
  }

  function deleteTodo(id) {
    let updatedTodos = todoList.filter((todo) => {
      return todo.id != id;
    });
    updateTodos(updatedTodos);
  }
  return (
    <div className="container mt-5 w-50">
      <h3 className="text-cente m">ToDo List App Using React </h3>
      <div className="input-group">
        <input
          onChange={(e) => {
            let task = e.target.value;
            updateInput(task);
          }}
          type="text"
          value={todoInput}
          className="form-control"
          placeholder="Enter Item Here"
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            addNewTodo();
          }}
        >
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todoList.map((todo) => {
          return (
            <li key={todo.id} className="list-group-item">
              <p>{todo.task}</p>
              <button
                className="btn"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
