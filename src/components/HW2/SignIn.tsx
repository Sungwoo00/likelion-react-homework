import { useState } from 'react';
import FormButton from './FormButton';
import FormInput from './FormInput';
import './SignIn.css';

function SignIn() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <section>
      <h2 className="sr-only">회원가입 정보 입력 페이지</h2>
      <form className="SignIn" action={handleSubmit}>
        <div className="SignInForm__inputs">
          <FormInput
            title="이름"
            type="text"
            name="SignIn_name"
            placeholder="2글자 이상 입력"
            value={formData.name}
            onChange={(value) => handleChange('name', value)}
          />
          <FormInput
            title="패스워드"
            type="password"
            name="SignIn_userPassword"
            placeholder="숫자, 영문 조합 6자리 이상 입력"
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            isToggle
          />
        </div>

        <FormButton text="로그인" />
      </form>
    </section>
  );
}

export default SignIn;
