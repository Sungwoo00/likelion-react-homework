import { useState } from 'react';
import Icon from '../UI/Icon';
import '../../../styles/Coupang/Form/CFormInput.css';

interface FormInput {
  title?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  isToggle?: boolean;
}

function FormInput({
  title,
  placeholder,
  name,
  type = 'text',
  value,
  onChange,
  isToggle,
}: FormInput) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="FormInput">
      <label className="FormInput__label" htmlFor={name}>
        <Icon shape={type === 'email' ? 'letter' : 'lock'} />
        <span>{title}</span>
      </label>
      <div className="FormInput__container">
        <input
          className="FormInput__input"
          autoComplete="new-password"
          type={type === 'password' && passwordVisible ? 'text' : type}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleFormInput}
        />
        {isToggle && (
          <Icon
            onClick={togglePassword}
            isVisible={passwordVisible}
            shape={passwordVisible ? 'show' : 'hide'}
            label="비밀번호"
          />
        )}
      </div>
    </div>
  );
}

export default FormInput;
