import React from "react";
import { toast } from "react-toastify";
class Buttontodo extends React.Component {
    state = {
        editToDo: {}
    }
    handleOnClickDelete = (todo) => {
        console.log('>>>', todo)
        this.props.deleteTodo(todo)
        toast.info('Delete Already')
    }
    handleOnClickEdit = (todo) => {
        let { editToDo } = this.state
        let isEmptyObj = Object.keys(editToDo).length === 0
        let { listToDos } = this.props
        if (isEmptyObj === false && editToDo.id === todo.id) {
            let listToDosCopy = [...listToDos]
            let objIndex = listToDosCopy.findIndex((item => item.id === todo.id))
            listToDosCopy[objIndex].title = editToDo.title
            this.setState({
                listToDos: listToDosCopy,
                editToDo: {}
            })
            return;
        }

        this.setState({
            editToDo: todo
        })
    }
    handleOnChangeEdit = (event) => {
        let editToDoCopy = { ...this.state.editToDo }
        editToDoCopy.title = event.target.value
        this.setState({
            editToDo: editToDoCopy
        })
    }
    render() {
        let { listToDos } = this.props
        let { editToDo } = this.state
        let isEmptyObj = Object.keys(editToDo).length === 0
        console.log('>>>Check isEmptyObj', isEmptyObj)
        return (
            < div className="list-todo-content" >
                {listToDos && listToDos.length > 0 &&
                    listToDos.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                {isEmptyObj === true
                                    ?
                                    <span> {index + 1} - {item.title} </span>
                                    :
                                    editToDo.id === item.id
                                        ?
                                        <span> {index + 1} - <input value={editToDo.title} onChange={(event) => this.handleOnChangeEdit(event)} /></span>
                                        :
                                        <span> {index + 1} - {item.title} </span>
                                }
                                <button className="Edit" onClick={() => this.handleOnClickEdit(item)}>
                                    {isEmptyObj === false && editToDo.id === item.id
                                        ?
                                        'Save'
                                        :
                                        'Edit'
                                    }
                                </button>
                                <button className="Delete" onClick={() => this.handleOnClickDelete(item)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Buttontodo;