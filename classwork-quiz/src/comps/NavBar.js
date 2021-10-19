import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <>
            <NavLink to="/" exact={true}>Home </NavLink>
            <NavLink to="/admin">Admin Panel </NavLink>
            <NavLink to="/leaderboards">Leaderboard </NavLink>
        </>
    )
}

export default NavBar;