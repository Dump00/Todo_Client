import { useEffect, useState } from 'react'
import Todo from '../../model/todo'
import './addtodo.css'

const AddTodo: React.FC<{onSave: (task: string) => void, updateText: string, onUpdate: (input: string) => void}> = ({onSave, updateText, onUpdate}) => {

    useEffect(() => {
        updateText && setUserInput(updateText)
    }, [updateText])
    

    const [userInput, setUserInput] = useState('')

    const handleUserInput = (event: any) => {
        setUserInput(event.target.value)
    }

    const handleAdd = () => {
        if(updateText){
            onUpdate(userInput)
            setUserInput('')
        } else {
            onSave(userInput)
            setUserInput('') 
        }
        
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