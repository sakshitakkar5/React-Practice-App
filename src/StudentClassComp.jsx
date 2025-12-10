import React, {Component} from "react";

class StudentClassComp extends Component{

    // constructor(props){
    //     super(props);
        // this.state={color:"red"};
    // }

    render(){
        // return <h1>I have created a class component which is of {this.state.color} color</h1>
        return <h1>I have created a class component which is of {this.props.color} color</h1>
    }

}

export default StudentClassComp;