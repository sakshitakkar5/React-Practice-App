import React from "react";



class ChangeClassComponent extends React.Component{

    constructor(){
        super();
        this.state={color:"red",
            brand:"Dell",
            processor:"Ultra 7"
        }
    }

    myfunc=() =>{
        this.setState({color:"blue"});

    }
    render(){
        return(
            <div>
                <h1>This laptop is of {this.state.brand} brand and color is {this.state.color}</h1>
                <button onClick={this.myfunc}>Change the Color</button>
            </div>
        )
    }
}

export default ChangeClassComponent;