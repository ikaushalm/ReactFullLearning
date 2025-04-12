import { useState } from "react";
import AppName from "./components/AppName";
import AddToDO from "./components/AddToDo";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center className="todo-container">
      <AppName />
      <AddToDO />
      <div className="items-container">
        <ToDoItem1></ToDoItem1>
        <ToDoItem2></ToDoItem2>
      </div>
    </center>
  );
}

export default App;
