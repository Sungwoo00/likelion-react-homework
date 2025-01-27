import { useFormStatus } from 'react-dom';
import './FormButton.css';

interface FormButton {
  text?: string;
}

function FormButton({ text }: FormButton) {
  const { pending } = useFormStatus();

  return (
    <button className="FormButton" type="submit" aria-disabled={pending}>
      {pending ? `${text} 중~` : `${text}`}
    </button>
  );
}

export default FormButton;
