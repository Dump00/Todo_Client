import './todolistgroup.css'
import Todo from '../../model/todo'

const TodoListGroup: React.FC<{list: Todo[]}> = ({list}) => {
    return (
        <div className="todo-group col-4 mt-5">
            <ul className="list-group">
                {list.map(todo => <li key={todo.id} className="list-group-item">{todo.todo}</li>)}
            </ul>
        </div>
    )
}

export default TodoListGroup