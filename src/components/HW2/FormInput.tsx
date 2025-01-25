import EyeClosed from './EyeClosed';

interface FormInput {
  title?: string;
  name?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  isVisible?: boolean;
}

function FormInput({
  title,
  name,
  type = 'text',
  value,
  onChange,
  isVisible,
}: FormInput) {
  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor={name}>{title}</label>
      <div>
        <input
          type={type}
          id={name}
          defaultValue={value}
          onChange={handleFormInput}
        />
        <EyeClosed onClick={() => {}} isVisible={isVisible} />
      </div>
    </>
  );
}

export default FormInput;
