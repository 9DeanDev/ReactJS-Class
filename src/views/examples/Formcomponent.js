import React from "react";

class Formcomponent extends React.Component {
    state = {
        position: '',
        salary: ''
    }
    handleonchangeName = (event) => {
        this.setState({
            position: event.target.value
        })
    }
    handleonchangeAge = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleonclick = (event) => {
        event.preventDefault()
        if (!this.state.position || !this.state.salary) {
            alert('Missing required')
            return;
        }
        this.props.addNewJob({
            id: Math.random(),
            position: this.state.position,
            salary: this.state.salary
        })

        this.setState({
            position: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <form>
                    <label>position:</label>
                    <br />
                    <input type="text" onChange={(event) => this.handleonchangeName(event)} />
                    <br />
                    <label>salary:</label>
                    <br />
                    <input type="text" onChange={(event) => this.handleonchangeAge(event)} />
                    <br />
                    <input type="submit" onClick={(event) => this.handleonclick(event)} />
                </form>
            </>
        )
    }
}
export default Formcomponent