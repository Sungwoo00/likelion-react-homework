import { useState } from 'react';
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';
import '@/styles/Cart/Counter.css'

function Counter(){

  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count => count - 1)
  }

  const handlePlus = () => {
    setCount(count => count + 1)
  }

  const handleClick = count <= 0;

  return(
    <div className='counter'>
      <CounterButton type='minus' disabled={handleClick} onClick={handleMinus}
      />
      <CounterDisplay counter={count}/>
      <CounterButton type='plus' disabled={false}  onClick={handlePlus}
      />
    </div>
  )
}

export default Counter