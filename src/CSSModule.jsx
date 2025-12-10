import sty from './CSSModule.module.css'
// import sty1 from './CSSModule1.module.css'

console.log(sty);
// console.log(sty1);

function CSSModule(){
    return(
        
        <div>
            
            <h1 className={sty.message}>
                This is CSSModule File
            </h1>
            {/* <h2 className={sty1.message}>This is CSSModule 1</h2> */}
            
        </div>
    )
}

export default CSSModule;