import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <div className="navContainer">
            <NavLink className="navItem" to="/" exact={true}>Home</NavLink>
            <NavLink className="navItem" to="/admin">Admin Panel</NavLink>
            {/*<NavLink className="navItem" to="/leaderboard">Leaderboard</NavLink>*/}
        </div>
    )
}

export default NavBar;