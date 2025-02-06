import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';
import '@/styles/Cart/Counter.css'

interface Counter{
  count: number;
  quantity: number;
  onCountChange:(count:number)=> void;
}

function Counter({count, onCountChange, quantity}:Counter){


  const handleMinus = () => {
    onCountChange(count - 1)
  }

  const handlePlus = () => {
    onCountChange(count + 1)
  }

  const handleClickMinus = count <= 1;
  const handleClickPlus = count >= quantity
  

  return(
    <div className='counter'>
      <CounterButton type='minus' disabled={handleClickMinus} onClick={handleMinus}
      />
      <CounterDisplay counter={count}/>
      <CounterButton type='plus' disabled={handleClickPlus}  onClick={handlePlus}
      />
    </div>
  )
}

export default Counter