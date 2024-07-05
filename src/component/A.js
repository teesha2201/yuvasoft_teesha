import React from 'react';

const A = ({onClick,show}) => {
    console.log("onClick:",onClick);
  return (
    <div>

        <div className='btn-parent'>
            <button onClick={onClick} className={`btn ${show ? 'btn-success': 'btn-secondary'}`}>{show ? "Hide Data":"Show Data"}</button>
        </div>
    </div>
  )
}

export default A