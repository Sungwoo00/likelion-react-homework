import Plus from '../UI/type=plus.svg';
import Minus from '../UI/type=minus.svg';
import Cart from '../UI/type=cart.svg';

type IconType = 'minus' | 'plus' | 'cart';

interface SvgIcon {
  type: IconType;
}

function SvgIcon({type}:SvgIcon) {

  const getIcon = () => {
    switch(type){
      case 'minus':
        return <img src={Minus} alt='minus' width={16} height={16}></img>
      case 'plus':
        return <img src={Plus} alt='plus' width={16} height={16}></img>
      case 'cart':
        return <img src={Cart} alt='cart' width={16} height={16}></img>
    }
  }

  return(
    <div className='Icon'>
      {getIcon()}
    </div>
  )

}

export default SvgIcon

