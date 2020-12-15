import React,{useState,useEffect} from 'react'

function HookCounter1() {
    const [count, setcount] = useState(0)
    const [name, setname] = useState('')
    useEffect(() => {
        console.log('docs title updating')
        document.title="Clicked "+count+' times'
        // return () => {
        //     cleanup
        // }
    },[count])
    return (
        <div>
        <input type='text' value={name} onChange={e=>setname(e.target.value)}></input>
            <button onClick={()=>setcount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounter1
