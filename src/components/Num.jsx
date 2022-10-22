import React from 'react'

function Num({ count }) {
  return (
        <div className="flex items-center flex-col justify-center font-bold text-white text-6xl">
      <div className='mt-5'>
        {count}
      </div>
    </div>
  )
}

export default Num