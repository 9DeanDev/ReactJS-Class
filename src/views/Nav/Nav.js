import React from "react";
import './Nav.scss';
import { Link, NavLink } from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Todos" >Todos</NavLink>
                <NavLink to="/About" >About</NavLink>
                <NavLink to="/ListUser" >ListUser</NavLink>
            </div>
        )
    }
}
export default Navigation;