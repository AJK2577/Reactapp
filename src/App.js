import "./styles.css";
import { useState } from "react";

const ToDoElement = ({ value, idx, onCompleteToDo, removeToDoItem }) => {
  return (
    <li
      style={{
        textAlign: "left",
        margin: 15,
        backgroundColor: value.isCompleted ? "#5ae31982" : "#e3251982"
      }}
    >
      {value.todo}
      <button onClick={() => onCompleteToDo(idx)}>
        {!value.isCompleted ? "complete task" : "uncomplete task"}
      </button>
      <button onClick={() => removeToDoItem(idx)}>remove to do item</button>
    </li>
  );
};

export default function App() {
  //for input
  const [inputValue, setToDo] = useState({
    todo: "",
    isCompleted: false
  });

  //for managing todo list
  const [todos, updateToDosList] = useState([]);

  //3 tasks to complete
  //add todo
  addToDo = () => {
    if (inputValue.todo) {
      updateToDosList([...todos, inputValue]);
      setToDo({
        //reset input field
        todo: "",
        isCompleted: false
      });
    }
    // console.log("our todos: ", todos)
  };

  //complete todo
  onCompleteToDo = (idx) => {
    const ourItem = todos[idx];
    const mTodos = [...todos];
    //change object property isCompleted
    const updatedItem = {
      ...ourItem,
      isCompleted: !ourItem.isCompleted
    };
    //put updated item into todo list
    mTodos[idx] = updatedItem;
    updateToDosList(mTodos);
  };

  //remove todo
  removeToDoItem = (idx) => {
    const mTodos = [...todos];
    mTodos.splice(idx, 1);
    //update todos list
    updateToDosList(mTodos);
  };

  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> WELCOME</h1>
      <h2 style={{ textDecoration: "underline" }}> TO DO LIST</h2>
      <p style={{ textDecoration: "underline" }}>
        This App will keep record of the tasks
      </p>
      <p> Try once</p>
      <input
        className="inputField"
        type="text"
        value={inputValue.todo}
        placeholder="add to do item"
        onChange={(e) =>
          setToDo({
            todo: e.target.value,
            isCompleted: false
          })
        }
      />
      <button onClick={addToDo}>add To Do</button>
      <ul>
        {todos.length > 0 &&
          todos.map((value, idx) => {
            return (
              <ToDoElement
                key={value.todo + idx}
                value={value}
                idx={idx}
                onCompleteToDo={onCompleteToDo}
                removeToDoItem={removeToDoItem}
              />
            );
          })}
      </ul>
    </div>
  );
}
