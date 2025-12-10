
// import React, { Component } from 'react'

// export default class ContolledComponent extends Component {

//     constructor(){
//         super();
//         this.state = {
//             username : '',
//             review : ''
//         }
//     }

//     changeUsername = (e) =>{
//         this.setState({
//             username:e.target.value})
//     }

//     changeReview = (e) =>{
//         this.setState({
//             review:e.target.value}
//         )
//     }

//     handleSubmit = (e) =>{
//         alert (`${this.state.username} and ${this.state.review}`)
//         e.preventDefault();
//     }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//         Username : <input type ="text" className='border-2 border-solid border-black' value={this.state.username}  
//         onChange={this.changeUsername}/>
//         <br/>
//         Review : <textarea className='border-2 border-solid border-black' value={this.state.review} 
//         onChange={this.changeReview}> </textarea> 
//         <br/>
//         <button type='submit'>Submit Form</button>
//         </form>
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'

export default class ContolledComponent extends Component {

    constructor(){
        super();
        this.state = {
            username : '',
            review : ''
        }
    }

    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) =>{
        alert (`${this.state.username} and ${this.state.review}`)
        e.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        Username : <input type ="text" className='border-2 border-solid border-black' value={this.state.username}  
        onChange={this.handleChange} name='username'/>
        <br/>
        Review : <textarea className='border-2 border-solid border-black' value={this.state.review} 
        onChange={this.handleChange} name='review'> </textarea> 
        <br/>
        <button type='submit'>Submit Form</button>
        </form>
      </div>
    )
  }
}

