import React from 'react'

const Click1 = () => {
    const clickme=()=>{
        console.log('clicked')
    }
    return (
        <div>
        <button onClick={()=>clickme()}>click</button>
        </div>
    )
}

export default Click1
