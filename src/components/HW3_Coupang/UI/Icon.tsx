import EyeCloseIcon from '../../../assets/UI/EyeClosed.svg';
import EyeOpenIcon from '../../../assets/UI/EyeOpen.svg';
import LetterIcon from '../../../assets/UI/shape=letter.svg';
import LockIcon from '../../../assets/UI/shape=lock.svg';
import '../../../styles/Coupang/UI/Icon.css';

interface Icon {
  onClick?: () => void;
  isVisible?: boolean;
  shape: 'letter' | 'lock' | 'hide' | 'show';
  label?: string;
}

function Icon({ onClick, isVisible, shape, label }: Icon) {
  const isToggled = shape === 'hide' || shape === 'show';

  const getIcon =
    shape === 'letter'
      ? LetterIcon
      : shape === 'lock'
        ? LockIcon
        : isVisible
          ? EyeOpenIcon
          : EyeCloseIcon;

  return (
    <button
      className={`Icon Icon--${shape}`}
      type="button"
      onClick={onClick}
      {...(isToggled && {
        role: 'switch',
        'aria-checked': isVisible,
        'aria-label': isVisible ? `${label} 보기` : `${label} 가리기`,
      })}
    >
      <img
        className="Icon__Shape"
        width={45}
        height={50}
        src={getIcon}
        alt=""
      ></img>
    </button>
  );
}

export default Icon;
