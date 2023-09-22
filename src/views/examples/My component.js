import React from "react";
import Childcomponent from "./Childcomponent";
import Formcomponent from "./Formcomponent";

class Mycomponent extends React.Component {
    state = {
        Arrayjob: [
            { id: 1, position: 'Developer', salary: '500' },
            { id: 2, position: 'Tester', salary: '400' },
            { id: 3, position: 'Project Manager', salary: '1000' }
        ]
    }
    addNewJob = (job) => {
        let currentJobs = this.state.Arrayjob;
        currentJobs.push(job)
        this.setState({
            Arrayjob: currentJobs
        })
    }
    deleteAJob = (job) => {
        let currentJobs = this.state.Arrayjob
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({ Arrayjob: currentJobs })
    }
    render = () => {
        return (
            <>
                <Formcomponent
                    addNewJob={this.addNewJob} />
                <Childcomponent
                    Arrayjob={this.state.Arrayjob}
                    deleteAJob={this.deleteAJob} />
            </>
        )
    }
}
export default Mycomponent;