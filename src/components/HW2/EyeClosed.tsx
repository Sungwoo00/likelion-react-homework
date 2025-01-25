import EyeIcon from '../../assets/EyeClosed.png';

interface EyeClosed {
  onClick?: () => void;
  isVisible?: boolean;
}

function EyeClosed({ onClick, isVisible }: EyeClosed) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isVisible ? '비밀번호 보기' : '비밀번호 숨기기'}
    >
      <img src={EyeIcon} alt=""></img>
    </button>
  );
}

export default EyeClosed;
