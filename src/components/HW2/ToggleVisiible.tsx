import EyeClosedIcon from '../../assets/EyeClosed.png';
import EyeOpenIcon from '../../assets/EyeOpen.png';

interface ToggleVisiible {
  onClick?: () => void;
  isVisible?: boolean;
}

function ToggleVisiible({ onClick, isVisible }: ToggleVisiible) {
  return (
    <button
      type="button"
      role="switch"
      onClick={onClick}
      aria-checked={isVisible}
      aria-label={isVisible ? '비밀번호 보기' : '비밀번호 숨기기'}
    >
      <img
        width={20}
        height={20}
        src={isVisible ? EyeOpenIcon : EyeClosedIcon}
        alt=""
      ></img>
    </button>
  );
}

export default ToggleVisiible;
