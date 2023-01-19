import React from "react";

function NavBarChild(props) {
    return (
        props.isLoggedIn ? 
        <button onClick={props.handleClick}>Log In</button>
        : <button onClick={props.handleClick}>Log Out</button>
    )
}

export default NavBarChild