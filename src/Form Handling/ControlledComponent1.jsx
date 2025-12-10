

// import React, { useState } from 'react'

// const ControlledComponent1 = () => {

//     const [name, setName] = useState('');
//     const [review, setreview] = useState('');

//     const changeName = (e) =>{

//         setName(e.target.value);

//     }

//     const changeReview = (e) =>{
//         setreview(e.target.value)
//     }

//     const handleSubmit = (e) =>{
//         alert(`${name} and ${review}`)
//         e.preventDefault();
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//        Username: <input type='text' className='border-2 border-solid border-black' 
//        value={name} onChange={changeName}/>
//         <br/>
//         Review: <textarea className='border-2 border-solid border-black'
//         value={review} onChange={changeReview}></textarea>
//         <br/>
//         <button type='submit'>Submit</button>

//         <h2>Current Name : {name}</h2>
//         <h2>Current Review: {review}</h2>
//       </form>
//     </div>
//   )
// }

// export default ControlledComponent1





import React, { useState } from 'react'

const ControlledComponent1 = () => {

    // const [name, setName] = useState('');
    // const [review, setreview] = useState('');

    // const changeName = (e) =>{

    //     setName(e.target.value);

    // }

    // const changeReview = (e) =>{
    //     setreview(e.target.value)
    // }

    const [formData, setformData] = useState({
        username: '',
        review: '',
        subject : 'React',
        gender : "",
        skills : []
    });

    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target

        if(type=="checkbox"){
          let updateSkills = [...formData.skills];

          if(checked){
            updateSkills.push(value);
          }
          else{
            updateSkills = updateSkills.filter(pre=>pre!=value)
          }

          setformData({
            ...formData, skills:updateSkills
          })
        }

else{

        setformData({...formData,[name]:value});
}
    }

    const handleSubmit = (e) =>{
        alert(`${formData.username} and ${formData.review} and ${formData.subject}` )
        e.preventDefault();
    }

    const handleReset = () =>{
        setformData({
        username: '',
        review: '',
        subject : 'React',
        gender : "",
        skills : []
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
       Username: <input type='text' className='border-2 border-solid border-black' 
       value={formData.username} onChange={handleChange} name = 'username'/>
        <br/>
        Review: <textarea className='border-2 border-solid border-black'
        value={formData.review} onChange={handleChange} name = 'review'></textarea>
        <br/>
        <select value={formData.subject} name = 'subject' onChange={handleChange}>
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="Java">Java</option>
        </select>
        <br/>

        Choose Gender:
        <label><input type="radio" name='gender' onChange={handleChange} value="Male" checked = {formData.gender==="Male"}/>Male</label>
        <label><input type="radio" name='gender' onChange={handleChange} value="Female" checked = {formData.gender==="Female"}/>Female</label>
        <label><input type="radio" name='gender' onChange={handleChange} value="Others" checked = {formData.gender==="Others"}/>Others</label>

        <br/>

        Skills:
        <label><input type='checkbox' value="Java" onChange={handleChange} name='skills' checked={formData.skills.includes("Java")}/>Java</label>
        <label><input type='checkbox' value="React" onChange={handleChange} name='skills' checked={formData.skills.includes("React")}/>React</label>
        <label><input type='checkbox' value="C++" onChange={handleChange} name='skills' checked={formData.skills.includes("C++")}/>C++</label>
        <label><input type='checkbox' value="DSA" onChange={handleChange} name='skills' checked={formData.skills.includes("DSA")}/>DSA</label>
        <br/>
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>

        <h2>Current Name : {formData.username}</h2>
        <h2>Current Review: {formData.review}</h2>
        <h2>Selected Subject : {formData.subject}</h2>
        <h2>Selected Gender : {formData.gender}</h2>
        <h2>Selected Skills : {formData.skills.join(",")}</h2>
      </form>
    </div>
  )
}

export default ControlledComponent1
