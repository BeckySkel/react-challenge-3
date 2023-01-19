import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";
import NavBarChild from "./NavBarChild";

class NavBarForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            message: "Hello, guest!",
            buttonText: "Log in",
            isLoggedIn: true,
        }
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
            isLoggedIn: prevState.isLoggedIn ? false : true
        }), ()=> console.log(this.state.message))
        
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                
                <div>
                    {/* <span>{this.state.message}</span> */}
                    {/* <button onClick={() => this.handleclick()}>{this.state.buttonText}</button> */}
                    <NavBarChild
                    handleClick={this.handleButtonClick}
                    isLoggedIn={this.state.isLoggedIn}/>
                </div>
            </div>
        )
    }
}

export default NavBarForm