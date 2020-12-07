import React, {Component} from 'react';

class Welcome extends Component{

    render(){
        return(
            <div>
               <h1>Welcome {this.props.name} </h1>
               <h1>Age {this.props.age} </h1>

            </div>
        )
    }
}
export default Welcome