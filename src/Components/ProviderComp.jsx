
import React, { useState } from 'react'
import ComponentA from '../Components/ComponentA'

export const nameContext = React.createContext();
export const scoreContext = React.createContext();

const ProviderComp = () => {
    const [name, setName] = useState("Sakshi")
    const [score, setScore] = useState(100);
  return (
    <div>

    <nameContext.Provider value={name}>
        <scoreContext.Provider value={score} >
      <h1>This is a provider Component</h1>
      <ComponentA />
      </scoreContext.Provider>
      </nameContext.Provider>
    </div>
  )
}

export default ProviderComp
