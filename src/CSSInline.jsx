

const myStyles = {color: "red",
    backgroundColor:"green",
    border: "5px solid black",
    borderRadius : "20px",
    textAlign : "center"
}

function CSSInline(){
    return(
        <div>
        {/* <h1 style={myStyles}>Hello, This is new CSSInline File </h1> */}
        <h1 className="message">Hello g</h1>
        <h2 className="message">New hello</h2>
        </div>
    )

}

export default CSSInline;