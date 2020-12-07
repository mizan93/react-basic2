import React, { Component } from 'react'

 class Click2 extends Component {
     clickme=()=>{
         console.log("You clicked me")
     }
    render() {
        return (
            <div>
                <button onClick={this.clickme()}>Click me</button>
            </div>
        )
    }
}
export default Click2