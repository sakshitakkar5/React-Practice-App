

import React, { useContext } from 'react'
import { nameContext, scoreContext } from '../UseContext/ProviderComponent'

const ComponentY = () => {
    const name1 = useContext(nameContext);
    const score1 = useContext(scoreContext);

  return (
    <div>
        <h2>This is Component Y</h2>
        <h1>Name : {name1} and Score : {score1}</h1>
    </div>
  )
}

export default ComponentY
