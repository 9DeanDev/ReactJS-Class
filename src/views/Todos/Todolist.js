import React from "react";
import './style.scss'
import Addtodo from "./Addtodo";
import { toast } from 'react-toastify';
import Buttontodo from "./Buttontodo";

class Todolist extends React.Component {
    state = {
        listToDos: [
            { id: '1', title: 'Do homework' },
            { id: '2', title: 'Study' },
            { id: '3', title: 'Check new videos' },
        ],
    }
    addNewToDo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success("Wow so easy!");
    }
    deleteTodo = (todo) => {
        let currentJobs = this.state.listToDos.filter(item => item.id !== todo.id);
        this.setState({
            listToDos: currentJobs
        })
    }
    editTodo = (todo) => {
        this.setState({
            editToDo: todo
        })
    }
    render() {

        return (
            <div className="list-todo-container">
                <Addtodo
                    addNewToDo={this.addNewToDo} />
                <Buttontodo
                    listToDos={this.state.listToDos}
                    deleteTodo={this.deleteTodo}
                    editTodo={this.editTodo} />
            </div>
        )
    }
}
export default Todolist;