import EyeClosedIcon from '../../assets/EyeClosed.png';
import EyeOpenIcon from '../../assets/EyeOpen.png';
import './ToggleVisible.css';

interface ToggleVisiible {
  onClick?: () => void;
  isVisible?: boolean;
}

function ToggleVisiible({ onClick, isVisible }: ToggleVisiible) {
  return (
    <button
      className="ToggleVisible"
      type="button"
      role="switch"
      onClick={onClick}
      aria-checked={isVisible}
      aria-label={isVisible ? '비밀번호 보기' : '비밀번호 숨기기'}
    >
      <img
        className="ToggleVisible__icon"
        width={20}
        height={20}
        src={isVisible ? EyeOpenIcon : EyeClosedIcon}
        alt=""
      ></img>
    </button>
  );
}

export default ToggleVisiible;
