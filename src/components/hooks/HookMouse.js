import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const logMoueMove=e=>{
        console.log('Mouse event')
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        console.log('UseEffect called')
       window.addEventListener('mousemove',logMoueMove)
        return () => {
            console.log('Component unmounting')
            window.removeEventListener('mousemove',logMoueMove)
        }
    },[])
    return (
        <div>
            X-{x} Y-{y}
        </div>
    )
}

export default HookMouse
