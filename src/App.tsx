import { useState } from "react";
import AddTodo from "./components/add-todo/AddTodo";
import NavBar from "./components/navbar/NavBar";
import TodoListGroup from "./components/todo-list-group/TotoListGroup";
import Todo from "./model/todo"; 


const App = () => {

  const TODO_LIST: Todo[] = []

  const [todoList, SetTodoList] = useState<Todo[]>(TODO_LIST)

  const saveUserInput = (task: string) => {
    const newTodo = new Todo(Math.random().toString(), task)
    SetTodoList(prevData => {
      return [...prevData, newTodo]
    })
  }

  return (
    <div className="container app">
      <NavBar />
      <AddTodo onSave={saveUserInput}/>
      <TodoListGroup list={todoList}/>
    </div>
  );
}

export default App;
