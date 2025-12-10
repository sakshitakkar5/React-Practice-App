
import './Dashboard.css'
function PropsComponent(props){
    return(
        <div className="myclass">
            <h3>I have a laptop of {props.brand} brand, {props.color} color and {props.processor} Processor
            . It is manufactured in {props.mfg} year</h3>
            <h2>It is developed in {props.years[0]}, {props.years[1]}, {props.years[2]}</h2>
            <h2>The brand is {props.carin.brand}</h2>
        </div>
    )
}

export default PropsComponent;