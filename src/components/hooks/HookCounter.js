import React,{useState} from 'react'

function HookCounter() {
    const [count, setcount] = useState(0)
    return (
        <div>
        <h2>Count: {count}</h2>
            <button onClick={()=>setcount(count+1)}>count {}</button>
        </div>
    )
}

export default HookCounter
