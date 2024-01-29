import React, { Component } from 'react'
import Transparent from './WebapiUpdate';

export default class ComponentUpdate extends Component {

    state={
        count:0,
        login:true
    }
    change=()=>{
        this.setState({count:this.state.count+1})
        console.log("welcome");
    }    
    hchange=()=>{
        this.setState({login:false})
        console.log("welcome");
    }
    // componentDidUpdate(){
    //     console.log('Ramesh');
    // }
  render() {
    return (
      <div>
        {/* <h1>Componentcomp</h1> */}
         <h1>{this.state.count}</h1>
        <button onClick={this.change}>click</button>
        <button onClick={this.hchange}>logic</button>
      {this.state.login?<Transparent/>:null}
      </div>
    )
  }
}
