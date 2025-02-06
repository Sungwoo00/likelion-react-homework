import '@/styles/Cart/CounterDisplay.css'

interface CounterDisplay{
  counter: number;
}

function CounterDisplay({counter = 1}:CounterDisplay) {

  return(
    <span className='counter-display'>{counter}</span>
  )

}

export default CounterDisplay