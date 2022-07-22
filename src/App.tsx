import { useEffect, useState } from "react";
import AddTodo from "./components/add-todo/AddTodo";
import NavBar from "./components/navbar/NavBar";
import TodoListGroup from "./components/todo-list-group/TotoListGroup";
import Todo from "./model/todo"; 
import todoService from "./service/todo-service";


const App = () => {

  const TODO_LIST: Todo[] = []

  const [todoList, SetTodoList] = useState<Todo[]>(TODO_LIST)

  useEffect(() => {
    todoService.getTodos().then((res : any) => {      
      SetTodoList(res.data.map((data: any) => {
        return data
      }))
    })
  }, [todoList])

  const saveUserInput = (task: string) => {
    todoService.postTodo(task)
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
