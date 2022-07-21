import { useState } from "react";
import AddTodo from "./components/AddTodo";
import NavBar from "./components/NavBar";
import TodoListGroup from "./components/TotoListGroup";
import Todo from "./model/todo"; 

const App = () => {

  const TODO_LIST = [
    new Todo('1', 'create react app'),
    new Todo('2', 'create front end'),
    new Todo('3', 'start spring backend')
  ]

  const [todoList, SetTodoList] = useState(TODO_LIST)

  return (
    <div className="container">
      <NavBar />
      <AddTodo />
      <TodoListGroup />
    </div>
  );
}

export default App;
