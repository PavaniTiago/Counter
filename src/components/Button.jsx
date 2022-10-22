import React from 'react'

function Button({countIncrement}) {
  return (
    <div>
        <button 
        className='mt-5 font-bold text-white text-2xl bg-sky-600 rounded-lg py-2 px-6 transition-colors hover:bg-cyan-500' onClick={countIncrement}>
          add
        </button>
    </div>
  )
}

export default Button