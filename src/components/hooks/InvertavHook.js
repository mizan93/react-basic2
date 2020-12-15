import React,{useState,useEffect} from 'react'

function InvertavHook() {
    const [count, setcount] = useState(0)
    const tick=()=>{
        setcount(prevcount=>prevcount+1)
    }
    function dosome(){
        console.log('someProp')
    }
    useEffect(() => {
        dosome()
        const interval=setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    },[])

    return (
        <div>
            {count}
        </div>
    )
}

export default InvertavHook
