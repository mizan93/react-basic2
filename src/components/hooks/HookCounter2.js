import React,{useState} from 'react'

function HookCounter2() {
    const initialcount=0
   const [count, setcount] = useState(initialcount)
   const inc5=()=>{
       for(let i=0;i<5;i++){
           setcount(prevCount=>prevCount+1)
       }
   }
    return (
        <div>

        <h3> Count : {count}</h3>
            
            <button onClick={()=>setcount(initialcount)}>Reset</button>
            <button onClick={()=>setcount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setcount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={inc5}>Increment 5</button>
        </div>
    )
}

export default HookCounter2
