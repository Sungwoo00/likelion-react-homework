import { useState } from 'react';
import Icon from '../UI/Icon';
import '../../../styles/Coupang/Form/CFormInput.css';

interface CFormInput {
  title?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  isToggle?: boolean;
}

function CFormInput({
  title,
  placeholder,
  name,
  type = 'text',
  value,
  onChange,
  isToggle,
}: CFormInput) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);

    if (newValue === '') {
      setError('');
      return;
    }

    if (type === 'email') {
      if (!validateEmail(newValue) && newValue !== '') {
        setError('아이디(이메일)는 이메일 형식으로 입력해주세요.');
      } else {
        setError('');
      }
    } else if (type === 'password') {
      if (newValue.length < 6) {
        setError('숫자, 영문 조합 6자리 이상 입력해 주세요.');
      } else {
        setError('');
      }
    }
  };

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="CFormInput">
      <div
        className={`CFormInput__Wrapper ${error ? 'CFormInput__Wrapper--error' : ''}`}
      >
        <label className="CFormInput__label" htmlFor={name}>
          <Icon shape={type === 'email' ? 'letter' : 'lock'} />
          <span>{title}</span>
        </label>
        <div className="CFormInput__container">
          <input
            className="CFormInput__input"
            autoComplete="new-password"
            type={type === 'password' && passwordVisible ? 'text' : type}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={handleCFormInput}
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
      {error && <p className="CFormInput__error">{error}</p>}
    </div>
  );
}

export default CFormInput;
