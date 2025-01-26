import { useFormStatus } from 'react-dom';

interface FormButton {
  text?: string;
}

function FormButton({ text }: FormButton) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? `${text} 중~` : `${text}`}
    </button>
  );
}

export default FormButton;
