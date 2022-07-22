import axios from 'axios'

const BASE_URI = 'http://localhost:8080/api/v1/todos'

class TodoService {
    getTodos: any = () => {
        return axios.get(BASE_URI + '/get')
    }

    postTodo: any = (todoItem: string) => {
        axios.post(BASE_URI + '/post', {"todoItem": todoItem})
    }
}

export default new TodoService()