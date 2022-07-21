import './addtodo.css'

const AddTodo = () => {
    return(
        <div className="row align-items-center mt-5">
            <div className="col-input col-3">
            <input type="text" id="inputtext" className="form-control todo-input" />
            </div>
            <div className="col-btn col-2">
             <button className="btn btn-info btn-add"><span className="font-weight-bold">Add todo</span></button>
            </div>
        </div>
    )
}

export default AddTodo