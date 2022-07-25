import axios from 'axios'
import Todo from '../model/todo'

const BASE_URI = 'http://localhost:8080/api/v1/todos'

class TodoService {

    getTodo: any = (id: number) => {
        return axios.get(BASE_URI + '/get/todo/' + id)
    }

    getTodos: any = () => {
        return axios.get(BASE_URI + '/get')
    }

    postTodo: any = (todoItem: string) => {
        axios.post(BASE_URI + '/post', {"todoItem": todoItem})
    }

    deleteTodo: any = (id: number) => {
        axios.delete(BASE_URI + '/delete/' + id)
    }

    updateItem: any = (todo: {id: number, todo: String}) => {
        axios.put(BASE_URI + '/update', todo)
    } 
}

export default new TodoService()