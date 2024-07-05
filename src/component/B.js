import React, { useState } from 'react';
import A from './A';
import C from './C';

const B = () => {
    const [data, setData] = useState({
        firstName:"Teesha",
        lastName:"Gupta"
    })
    const [show, setShow] = useState(false)
    const handleClick = ()=>{
        setShow(!show);
    }
  return (
    <div>
         <A onClick={handleClick} show={show} />
         <C data = {data} show ={show}/>
    </div>
  )
}

export default B