

import React, { useState } from 'react'

const WithoutUseContext1 = () => {
    const [name, setName] = useState("Sakshi");
  return (
    <div>
    <h2> This is Provider Component and passing name as prop in Component A</h2>
    <ComponentA name = {name}/>
    </div>
  )
}

function ComponentA({name}){
    return(
    <div>
    <h2>This is Component A and receiving from Provider</h2>
    <ComponentB name = {name}/>
    </div>  
    )
}

function ComponentB({name}){
    return(
    <div>
        <h2>This is Component B and receiving data from Component A</h2>
        <h1>Hello!! I am {name}</h1>
    </div>
    )
}

export default WithoutUseContext1
