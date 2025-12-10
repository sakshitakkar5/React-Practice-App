
import React from "react"
class EventHandler1 extends React.Component{
    click(){
        alert("Welcome Welcome");
    }
    render(){
        return(
            <div>
                <button onClick={this.click}>Click kro</button>
            </div>

        )
    }
}

export default EventHandler1;