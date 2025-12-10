import './Dashboard.css'

function calculatepower(po){
    return po*200;
}

const myfunc= () =>{
    return alert("Hello! welcome to my new page")
}
function Dashboard(){
    const brand = "Dell";
    const model = "M1"
    const power = 23*400;
    const x = "myclass";
    let marks = 60;
    let res;

    const myObj={
        name:"Sakshi",
        age:25,
        state:"Punjab"
    }

    const myStyles={
        color:"red",
        backgroundColor:"lightgreen"
    }

    // if(marks>40){
              
    //         res = "pass"

    //         }
    //         else{
    //             res = "Fail"
    //         }

            
    return(

        <div className={x}>
            <h1>JSX is {5+5} times better than CreateReactElement</h1>
            <h2>I have a laptop of {brand} brand and model is {model}</h2>
            <h2>The power of laptop is {power}</h2>
            <h2>The new power of laptop is {calculatepower(100)}</h2>
            <h2>Student name is {myObj.name} , age is {myObj.age} and state is {myObj.state}</h2>
            <button onClick={myfunc} disabled={false}>Click Me</button>

            <div>
                <h1 style={myStyles}>This is the new wy of styling</h1>
            </div>
            {/* <h1>The result is : {res}</h1> */}
            <h1>{marks>50?"Pass":"fail"}</h1>

            
        </div>
    )
}

export default Dashboard;