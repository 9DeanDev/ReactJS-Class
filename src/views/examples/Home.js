import React from "react";
import { connect } from "react-redux";
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            ('/todo')
        }, 3000)
    }
    handleOnclickDelete = (user) => {
        this.props.deleteUserRedux(user)
    }
    handleOnclickAdd = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log('>>>check props', this.props)
        let data = this.props.dataRedux
        return (
            <>
                <div>HELLO WORLD FROM HOME PAGE WITH DEAN</div>
                {data && data.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {index + 1} {item.name} <span onClick={() => this.handleOnclickDelete(item)}>X</span>
                        </div>
                    )
                })
                }
                <button onClick={() => this.handleOnclickAdd()}>ADD</button>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'ADD_USER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);