

import React, { useState } from 'react'

const ControlledComponentPractice1 = () => {

    // const [fname, setFname] = useState('');
    // const [lname, setLname] = useState('');
    // const [review, setreview] = useState('');

    const [formData, setFormData] = useState({
        fname : '',
        lname : '',
        review : '',
        subject:"Python",
        gender : "",
        skills :[]

    })

    // const changeFname = (e) =>{
    //         setFname(e.target.value)
    // }
    // const changeLname = (e) =>{
    //     setLname(e.target.value)

    // }
    // const changeReview = (e) =>{
    //     setreview(e.target.value)
    // }

    const changeElt = (e) =>{
        const {name,value, type, checked} = e.target

        if(type==="checkbox")
        {
            let updateSkills = [...formData.skills];

            if(checked){
                updateSkills.push(value);
            
            }
            else{
                updateSkills = updateSkills.filter(s=>s!=value)
            }

            setFormData({
                ...formData, skills:updateSkills
            })
        }
        else{
        setFormData({
           ...formData, [name]:value 
        })
    }
    }


    const handleSubmit = (e) =>{
        alert(`${formData.fname} ${formData.lname} and ${formData.review} and ${formData.subject} ${formData.gender}` )
            e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            First Name: <input type = "text" className='border-2 border-black border-solid' value={formData.fname} onChange={changeElt} name = 'fname'/> <br/>
            Last Name: <input type='text' className='border-2 border-black border-solid' value={formData.lname} onChange={changeElt} name = 'lname'/> <br/>
            Review : <textarea className='border-2 border-black border-solid' value={formData.review} onChange={changeElt} name = 'review'></textarea><br/>
            Select Subject:
            <select name = "subject" onChange={changeElt} value={formData.subject}>
                <option value="py">Python</option>
                <option value="Re">React</option>
                <option value="Ja">Java</option>
            </select>

<br/>
            Choose Gender:
            <label><input type='radio' value="Male" name='gender' onChange={changeElt} checked={formData.gender == "Male"}/> Male</label>
            <label><input type='radio' value="Female" name='gender' onChange={changeElt} checked={formData.gender== "Female"}/> Female</label>
            <label><input type='radio' value="Others" name='gender' onChange={changeElt} checked={formData.gender=="Others"} /> Others</label>
            
            <br/>

            Choose Skills:
            <label><input type="checkbox" name="skills" value="React" checked={formData.skills.includes("React")} onChange={changeElt}/>React</label>
            <label><input type="checkbox" name="skills" value="Node" checked={formData.skills.includes("Node")} onChange={changeElt}/>Node</label>
            <label><input type="checkbox" name="skills" value="DSA" checked={formData.skills.includes("DSA")} onChange={changeElt}/>DSA</label>
            
            <br/>
            <button type='submit'>Submit Form</button>
            <button onClick={() => setFormData({ gender: "" })}>Reset</button>
            <h2>Selected Subject is : {formData.subject}</h2>
            <h2>Selected Gender is : {formData.gender}</h2>
            <h2>Selected Skills are: {formData.skills.join(",")}</h2>
            
        </form>
      
    </div>
  )
}

export default ControlledComponentPractice1
