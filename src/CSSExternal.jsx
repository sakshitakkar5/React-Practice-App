import './CSSExternal1.css'
import './CSSExternal.css'


function CSSExternal(props){

    const cn = props.heading ? 'heading':'';

    return(

        <div>
            <h1 className="message">This is my CSSExternal File Style</h1>
            {/* <h1 className='heading back'>New New New</h1> */}
        </div>

    )

}

export default CSSExternal;