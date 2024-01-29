import React, { Component } from 'react'

export default class 
 extends Component {
    state={
         name:'Ramesh',
         age:21,
         description:'hi,hello'
    }
  render() {
    return (
      <div>
        <h1>hi hello,welcome here</h1>
        <h1>Name:{this.state.name}</h1>
        <h1>img:{this.state.age}</h1>
        <h1>description:{this.state. description}</h1>
        
      </div>
    )
  }
}
