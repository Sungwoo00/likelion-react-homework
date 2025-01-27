import { useState } from 'react';
import FormButton from './FormButton';
import FormInput from './FormInput';
import './SignUp.css';
import '../../styles/common/a11y.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    validPassword: '',
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
      <form className="SignUp" action={handleSubmit}>
        <div className="SignUpForm__inputs">
          <FormInput
            title="이름"
            type="text"
            name="name"
            placeholder="2글자 이상 입력"
            value={formData.name}
            onChange={(value) => handleChange('name', value)}
          />
          <FormInput
            title="이메일"
            type="email"
            name="userEmail"
            placeholder="sungwoo@gmail.com"
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
          />
          <FormInput
            title="패스워드"
            type="password"
            name="userPassword"
            placeholder="숫자, 영문 조합 6자리 이상 입력"
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            isToggle
          />
          <FormInput
            title="패스워드 확인"
            type="password"
            name="userPasswordValid"
            placeholder="입력한 패스워드 다시 입력"
            value={formData.validPassword}
            onChange={(value) => handleChange('validPassword', value)}
            isToggle
          />
        </div>

        <FormButton text="회원가입" />
      </form>
    </section>
  );
}

export default SignUp;
