import React, {useEffect, useState} from 'react';
export default function ControlledChild(props) {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        setCount(props.refreshCount*2);
    },[props.refreshCount]);

    return (
        <div>
            This is my child {count}
        </div>
    )

}
