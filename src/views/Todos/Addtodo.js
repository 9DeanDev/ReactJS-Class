import React from "react";
import { toast } from 'react-toastify';
class Addtodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnClickTitle = () => {
        if (!this.state.title) {
            toast.error('Missing title')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
        }
        this.props.addNewToDo(todo);
        this.setState({
            title: ''
        })
        // this.props.addNewToDo(todo = {
        //     id: Math.floor(Math.random() * 1000),
        //     title: this.state.title
        // })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                <button className="Add" onClick={() => this.handleOnClickTitle()}>Add</button>
            </div>
        )
    }
}
export default Addtodo;