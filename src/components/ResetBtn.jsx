import React from 'react'

function ResetBtn({countReset}) {
  return (
    <div>
        <button 
        className='mt-5 font-bold text-white text-2xl bg-sky-600 rounded-lg py-2 px-6 transition-colors hover:bg-cyan-500' onClick={countReset}>
          reset
        </button>
    </div>
  )
}

export default ResetBtn