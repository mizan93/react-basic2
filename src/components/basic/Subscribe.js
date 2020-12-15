import React, {} from 'react';

class Subscribe extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'Please subscripe'
        }
    }
    changeMsg(){
        this.setState({
            msg:'Thanks for subscribe'
        })
    }
    
    render(){
       
        return(
            <div>
              <div>
                  <h1> {this.state.msg}</h1>
                  <button onClick={()=>this.changeMsg()}>Subscribe</button>
              </div>

            </div>
        )
    }
}
export default Subscribe