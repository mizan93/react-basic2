import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        this.setState((prevstate, props)=>({
            count: prevstate.count + props.value
         } )
        )
    }
     incrementfive(){
         this.increment()
         this.increment()
         this.increment()
         this.increment()
     }
    
    render() {
        return (
            <div>
              <h1>count: {this.state.count}</h1> 
              <button onClick={()=>this.incrementfive()}>increment</button> 
            </div>
        )
    }
}

export default Counter
