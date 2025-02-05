import SvgIcon from '../UI/SvgIcon';
import '@/styles/Cart/CounterButton.css'

type IconType = 'minus' | 'plus' | 'cart';
interface CounterButton {
  type: IconType;
  disabled: boolean;
  onClick: () => void;
}


function CounterButton({type, disabled = false, onClick}:CounterButton){

  return(
    <button 
    disabled={disabled}
    onClick={onClick}
    className={`counter-button ${disabled ? 'counter-button--disabled':'' }`}
    >
      <SvgIcon type={type}/>
    </button>
  )

}

export default CounterButton