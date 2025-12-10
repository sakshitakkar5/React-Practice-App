

import React, { useState } from 'react'



function WithoutUseContext(){
    const [user, setUser] = useState("Sakshi");
    return(
        <div>
            <h1>This is Without user context file</h1>
            <Component1 user1 = {user}/>
        </div>
    )
}

function Component1({user1}){
    return(
        <div>
            <h1>This is Component 1</h1>
            <Component2 user2={user1} />
        </div>
    )
}

const Component2 = ({user2}) => {
  return (
    <div>
    <h1>This is Component 2</h1>
    <h2>Welcome {user2}</h2>
    </div>
  )
}


export default WithoutUseContext
