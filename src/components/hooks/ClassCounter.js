import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment}>Incrment</button>
            </div>
        )
    }
}

export default ClassCounter
