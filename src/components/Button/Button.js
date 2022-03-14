import React, { Component } from "react";
import b from "./Button.module.css"

class Button extends Component{
    render(){
        return(
            <button type="button" className={b.Button} onClick={this.props.onClick}>
                Load more
            </button>
        ) 
    }
}
export default Button