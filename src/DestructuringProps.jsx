

// function DestructuringProps({color})
// {
//     return(
//         <h3>I bouught a laptop of {color}</h3>
//     )

// }


function DestructuringProps(props)
{
    let {brand, color, ...rest} = props
    return(
        <h3>I bouught a laptop of {color} color and brand is {brand}. The model is {rest.model}</h3>
    )

}

export default DestructuringProps;