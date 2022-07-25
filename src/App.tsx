import { useEffect, useState } from "react";
import AddTodo from "./components/add-todo/AddTodo";
import NavBar from "./components/navbar/NavBar";
import TodoListGroup from "./components/todo-list-group/TotoListGroup";
import Todo from "./model/todo"; 
import todoService from "./service/todo-service";


const App = () => {

  const TODO_LIST: Todo[] = []

  const [todoList, SetTodoList] = useState<Todo[]>(TODO_LIST)
  const [todoItem, setTodoItem] = useState<string>('')
  const [todoId, setTodoId] = useState<number>(0)


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

  const deleteItem = (id: string) => {
    todoService.deleteTodo(parseInt(id))
  }

  const updateItem = (id: string) => {
    const tod = todoList.filter(item => item.id === id)
    setTodoItem(tod[0].todo)
    setTodoId(parseInt(tod[0].id))
  }

  const updateFunc = (input: string) => {
    const todo = {
      id: todoId,
      todo: input
    }
    todoService.updateItem(todo)
    setTodoItem('')
    setTodoId(0)
  }


  return (
    <div className="container app">
      <NavBar />
      <AddTodo onSave={saveUserInput} updateText={todoItem} onUpdate={updateFunc}/>
      <TodoListGroup onDelete={deleteItem} onUpdate={updateItem} list={todoList} />
    </div>
  );
}

export default App;
