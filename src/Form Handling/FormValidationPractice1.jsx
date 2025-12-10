

import React, {useState} from 'react'

const FormValidationPractice1 = () => {

     const [formData, setFormData] = useState({
            name : '',
            password : ''
        })

        const [err, seterr] = useState({
          nameerr : "",
          passerr:""

        })

        

        const changeElts = (e) =>{
            const {name, value} = e.target;

            setFormData((formData) =>({
                ...formData , [name] :value
            }))

            
            if(name === "name")
            {
              seterr(pre => ({...pre,
                nameerr:value? "":"Name is required"

              }))
            }

            if(name==="password"){
              seterr(pre => ({
                ...pre,
                passerr:value?"":"Password is required"
              })

              )
            }
          }

        const handleSubmit = (e) =>{

          let nameerr = "";
          let passerr = "";
          if(!formData.name){
              nameerr="Name is required"
            }

            if(!formData.password){
              passerr="Password is required"
            }

            seterr({nameerr,passerr})

            if(!nameerr && !passerr){
            alert(`${formData.name} and ${formData.password}`)
           
            }
             e.preventDefault();
        }
  return (

    <div>

        <div>
      <form onSubmit={handleSubmit}>
        Username : <input type='text' onChange={changeElts} name="name" value = {formData.name} /> <br/>
        <span>{err.nameerr}</span><br/>
        Password: <input type='password' onChange={changeElts} name="password" value={formData.password}/> <br />
      <span>{err.passerr}</span><br/>
        <button type='submit'>Submit Form</button>
      </form>
    </div>
      
    </div>
  )
}

export default FormValidationPractice1
