
import React, { Component } from 'react'

export default class ControlledComponentPractice extends Component {
    constructor() {
        super();
        this.state={
            firstname : '',
            lastname : '',
            review: ''
        }
    }

    changeElements = (e) =>{
        const {name,value} = e.target
        this.setState(
            {
                [name]:value
            }
        )
    }

    // changeFname = (e) =>{
    //     this.setState({firstname:e.target.value})
    // }


    // changeLname = (e) =>{
    //     this.setState({lastname:e.target.value})
    // }

    // changeReview = (e) =>{
    //     this.setState({review:e.target.value})

    // }

    handleSubmit = (e) =>{
        alert(`${this.state.firstname} ${this.state.lastname} and ${this.state.review}`)
        e.preventDefault();
    
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            First Name: <input type = "text" className='border-2 border-black border-solid' value={this.state.firstname} onChange={this.changeElements} name = 'firstname'/> <br/>
            Last Name: <input type='text' className='border-2 border-black border-solid' value={this.state.lastname} onChange={this.changeElements} name = 'lastname'/> <br/>
            Review : <textarea className='border-2 border-black border-solid' value={this.state.review} onChange={this.changeElements} name = 'review'></textarea><br/>
            <button type='submit'>Submit Form</button>
        </form>
      </div>
    )
  }
}
