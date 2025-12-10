
import React from "react";
class IncrementDecrement extends React.Component{

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increment = () =>{

        this.setState({count:this.state.count+1})

    }

    decrement = () =>{
        if(this.state.count>0)
         this.setState({count:this.state.count-1})
    }

    render(){


        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>

        )

    }

}

export default IncrementDecrement;