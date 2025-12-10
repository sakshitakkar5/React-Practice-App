

import React, { useContext, useState } from 'react'

const userContext = React.createContext();


const UseContextFile = () => {
    const [user, setUser] = useState("Sakshi");
    
  return (
    <div>

        <userContext.Provider value = {user}>
        <h2>This is the provider component</h2>
        <Component1 />

        </userContext.Provider>
      
    </div>
  )
}


function Component1(){
    return(
        <div>
            <h2>This is Component1</h2>
            <Component2 />

        </div>
    )
} 

function Component2(){
    const user1 = useContext(userContext);
    return(
        <div>
                <h2>This is Component 2. Welcome {user1}</h2>

        </div>
    )
}
export default UseContextFile
