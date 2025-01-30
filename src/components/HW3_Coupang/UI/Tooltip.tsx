import TooltipRight from '../../../assets/UI/TooltipRight.svg';
import TooltipLeft from '../../../assets/UI/TooltipLeft.svg';
import TooltipBottom from '../../../assets/UI/TooltipBottom.svg';
import TooltipTop from '../../../assets/UI/TooltipTop.svg';
import '../../../styles/Coupang/UI/Tooltip.css';

interface Tooltip {
  text: string;
  direction?: 'top' | 'bottom' | 'right' | 'left';
}

function Tooltip({ text, direction = 'top' }: Tooltip) {
  const getTooltip =
    direction === 'right'
      ? TooltipRight
      : direction === 'left'
        ? TooltipLeft
        : direction === 'bottom'
          ? TooltipBottom
          : TooltipTop;

  return (
    <div className="Tooltip">
      <span className="Tooltip__text">{text}</span>
      <img
        className={`Tooltip__arrow Tooltip--${direction}`}
        src={getTooltip}
        alt=""
      />
    </div>
  );
}

export default Tooltip;
2;
