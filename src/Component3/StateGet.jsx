import React, { Component } from 'react'

export default class StateGet extends Component {

    state={
        Studenname:'RAMESH',
        age:22,
        From:'Tenkasi'
    }
  render() {
    return (
      <div>
           <h1>StateGet</h1>
           <h4>Studenname:{this.state.Studenname}</h4>
           <h4>age:{this.state.age}</h4>
           <h4>From:{this.state.From}</h4>

      </div>
    )
  }
}
