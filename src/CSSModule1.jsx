import style from './CSSModule.module.css'
// import sty1 from './CSSModule1.module.css'

console.log(style);
// console.log(sty1);

function CSSModule1(){
    return(
        
        <div>
            
            <h1 className={style.message}>
                This is CSSModule File1
            </h1>
            {/* <h2 className={sty1.message}>This is CSSModule 1</h2> */}
            
        </div>
    )
}

export default CSSModule1;