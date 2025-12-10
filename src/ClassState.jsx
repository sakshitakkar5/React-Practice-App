import React from "react";

 class ClassState extends React.Component{

    constructor(){
        super();
        this.state = {
            chapter: "Chaper 1",
            Book : "React JS"
        }
    }

    changeBook = () =>{
        this.setState({Book:"Master in C"});
    }
    render(){
        return(
            <div>
                <h1>I am reading {this.state.chapter} from {this.state.Book}</h1>
                <button onClick={this.changeBook}>Change Book name</button>
            </div>


        )
    }
 }

 export default ClassState;