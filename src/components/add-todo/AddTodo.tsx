import { useState } from 'react'
import './addtodo.css'

const AddTodo: React.FC<{onSave: (task: string) => void}> = ({onSave}) => {

    const [userInput, setUserInput] = useState('')

    const handleUserInput = (event: any) => {
        setUserInput(event.target.value)
    }

    const handleAdd = () => {
        onSave(userInput)
        setUserInput('') 
    }

    return(
        <div className="row align-items-center mt-5">
            <div className="col-input col-3">
            <input value={userInput} onChange={handleUserInput} type="text" id="inputtext" className="form-control todo-input" />
            </div>
            <div className="col-btn col-2">
             <button type='button' onClick={handleAdd} className="btn btn-info btn-add"><span className="font-weight-bold">Add todo</span></button>
            </div>
        </div>
    )
}

export default AddTodo