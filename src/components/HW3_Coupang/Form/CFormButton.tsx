import { useFormStatus } from 'react-dom';
import '../../../styles/Coupang/Form/CFormButton.css';

interface CFormButton {
  text?: string;
  mode?: string;
  disabled?: boolean;
}

function CFormButton({ text, mode = 'Primary', disabled = true }: CFormButton) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`CFormButton CFormButton--${mode} ${disabled ? 'CFormButton--disabled' : ''}`}
      type="submit"
      disabled={disabled}
      aria-disabled={pending}
    >
      {pending ? `${text} 중~` : `${text}`}
    </button>
  );
}

export default CFormButton;
