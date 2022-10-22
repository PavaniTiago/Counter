import './styles/global.css';
import Counter from './components/Counter';
import Button from './components/Button';
import Num from './components/Num';
import ResetBtn from './components/ResetBtn';


import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const countIncrement = () =>{
    setCount(count + 1)
  }

  const countReset = () =>{
    setCount(0)
  }


  return (
    <div className="w-screen h-screen bg-slate-900 flex items-center justify-center flex-col">
      <div className='flex items-center flex-col border-white border-4 rounded-2xl px-8 py-8'>
        <header className='flex flex-col'>
            <Counter />
        </header>
        <main>
          <Num count={count}/>
          <div className='flex flex-row gap-3'>
            <ResetBtn countReset={countReset} />
            <Button countIncrement={countIncrement}/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
