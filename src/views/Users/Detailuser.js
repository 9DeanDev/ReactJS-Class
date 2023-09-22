import React from "react";
import withRouter from "./HOC";
import axios from "axios";

class Detailuser extends React.Component {

    state = { user: {} }
    async componentDidMount() {
        let id = this.props.params.id
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        this.setState({ user: res.data.data })
        console.log('>>>', res)
    }
    handleBackbutton = () => {
        this.props.navigate('/ListUser/')
    }
    render() {
        console.log('>>>>', this.props)
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0
        return (
            <>
                <div>
                    HELLO Detailuser {this.props.params.id}
                </div >
                {
                    isEmptyObj === false &&
                    <>
                        <div>User's name: {user.first_name} {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <button onClick={() => this.handleBackbutton()}>BACK</button>
                    </>

                }
            </>


        )
    }
}
export default withRouter(Detailuser); 