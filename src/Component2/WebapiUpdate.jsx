import React, { Component } from 'react'

export default class WebapiUpdate extends Component {
     
  state={
    products:[]
  }
  result=async()=>{
      let val=await fetch('https://fakestoreapi.com/products');
      let values=await val.json();
       this.setState({products:values})

  }

  // componentDidMount(){
  //   this.result()
  // }


  render() {
    return (
      <div>

        {console.log(this.state.products,'hi')}
        <h1 > Transparent</h1>
        {this.state.products?.map((data,i)=>(
         <div key={i} >
            <h1>
            {data.title}
           </h1>
           <h5>
            {data.description}
           </h5>
           <img src={data.image} width={250}/>
         </div>
        ))}
        <button onClick={this.result}>click</button>

      </div>
    )
  }
}
