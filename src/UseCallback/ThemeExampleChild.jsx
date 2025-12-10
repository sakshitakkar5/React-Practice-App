
import React from 'react'

const ThemeExampleChild = (props) => {
    console.log('Child component rendered')
  return (
    <div>
        <button onClick={props.countfn}>Change Count</button>
    </div>
  )
}

export default React.memo(ThemeExampleChild);
