



import React, { useState } from 'react'

const FormValidationPractice = () => {
    const [formData, setFormData] = useState({
        name : '',
        password : ''
    })

    const [errors, seterrors] = useState({
        nameError: '',
        passwordError : ''
    });

  

    const changeElts = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData , [name]:value
        })

        if(name === "name"){
            seterrors((pre) => ({...pre,
                nameError:value?"":"Name Field is Require"}))
            
        }

        if(name==="password"){
            seterrors((pre) => ({...pre,
                passwordError:value?"":"Password Field is Required"
            }))
            
    }
}

    
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        let nameError = "";
        let passwordError = "";

        if(!formData.name){
            nameError = "Name Field is required";
        }

        if(!formData.password){
            passwordError = "Password field is required"
        }

        seterrors({
            nameError,passwordError
        })

        if(!nameError && !passwordError){
            alert(`Form Submitted Successfully ${formData.name} and ${formData.password}`)
        }
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Username : <input type='text' onChange={changeElts} name="name" value = {formData.name} /> <br/>
         <span style={{color:"red"}}>{errors.nameError}</span><br/>
        Password: <input type='password' onChange={changeElts} name="password" value={formData.password}/> <br />
        <span style={{color:"red"}}>{errors.passwordError}</span><br/>
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  )
}

export default FormValidationPractice
