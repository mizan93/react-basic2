import React, { Component } from 'react'

class Cartwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'Hello'
        }
    }
    
    render() {
        // const {branolor}=this.props
        const {msg}=this.state
        return (
            <div>
                <h2>{msg} </h2>
            </div>
        )
    }
}

export default Cartwo