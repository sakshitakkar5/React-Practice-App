

import React, { useContext } from 'react'
import { nameContext, scoreContext } from './ProviderComp';

const ComponentB = () => {
    const uname = useContext(nameContext);
    const uscore = useContext(scoreContext);
  return (
    <div>
      <h1>This is Component B</h1>
      <h2>Welcome {uname} with {uscore}</h2>
    </div>
  )
}

export default ComponentB
