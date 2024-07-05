import React from 'react';
// import B from './B';
const C = ({data,show}) => {
    // console.log("data in C:",data.firstName);
  return (
    <div>
        {show && 
        (
           <>
            <div className='d-flex justify-content-center align-item-center'>
                <p className='mt-5 text-black'>C component that fetch data which is pass as props from B and Render on Current Component </p>
            </div>    
                <div className='d-flex flex-column  justify-content-center align-items-center'>
                    <p className='fs-2'>First Name: <span className='text-success'>{data.firstName}</span></p>
                    <p className='fs-2 ms-2'> Last Name: <span className='text-success'>{data.lastName}</span></p>
                </div> 
          
           </>   
        ) 
        }
       
    </div>
  )
}

export default C
