
import React, { useState } from 'react'
import ComponentX from './ComponentX';

export const nameContext = React.createContext();
export const scoreContext = React.createContext();


const ProviderComponent = () => {

    const [name, setName] = useState("Sakshi");
    const [score, setScore] = useState(100);
  return (
    <div>
        <nameContext.Provider value={name}>
            <scoreContext.Provider value={score}>
      <h2>This is a provider component </h2>
      <ComponentX />
      </scoreContext.Provider>
      </nameContext.Provider>
    </div>
  )
}

export default ProviderComponent
