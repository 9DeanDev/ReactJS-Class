import React from "react";

class Childcomponent extends React.Component {
    state = {
        show: false
    }
    handleshowevent = () => {
        this.setState({ show: !this.state.show })
    }
    handleDelete = (job) => {
        console.log('>>>>>>', job)
        this.props.deleteAJob(job)
    }
    render() {
        let { Arrayjob } = this.props;
        let { show } = this.state;
        return (
            <>
                {
                    show === false
                        ?
                        <button onClick={this.handleshowevent}>SHOW</button>
                        :
                        <>
                            <div>{Arrayjob.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.position} - {item.salary}$ <span onClick={() => this.handleDelete(item)}>X</span>
                                    </div>
                                )
                            })}
                            </div>
                            <button onClick={this.handleshowevent}>HIDE</button>
                        </>
                }
            </>
        )
    }
}
export default Childcomponent;