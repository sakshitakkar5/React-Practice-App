
import './index.css'
function EventHandler(){

    function click(){
        alert("This is a welcome page")
    }
    return(

        <div>
            <button onClick={click} >Click g</button>
        </div>

    )
}

export default EventHandler;