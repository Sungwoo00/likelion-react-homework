import { useState } from 'react';
import FormCheckBox from '../HW3_Coupang/Form/FormCheckBox';
import CFormButton from './Form/CFormButton';
import CFormInput from './Form/CFormInput';
import Divider from '../HW3_Coupang/UI/Divider';
import Tooltip from './UI/Tooltip';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    autoLogin: false,
  });

  const handleChange = (key: string, value: string | boolean) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <section>
      <h2 className="sr-only">로그인 정보 입력 페이지</h2>
      <form className="SignIn" action={handleSubmit}>
        <div className="SignInForm">
          <CFormInput
            title="아이디"
            type="email"
            name="SignIn_email"
            placeholder="아이디(이메일)"
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
          />
          <Divider />
          <CFormInput
            title="비밀번호"
            type="password"
            name="SignIn_password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            isToggle
          />
          <Divider />
          <div className="SignInForm__checkbox">
            <FormCheckBox
              checked={formData.autoLogin}
              onChange={(checked) => handleChange('autoLogin', checked)}
            />
            <Tooltip text="개인 정보 보호를 위해 본인 기기에서만 이용해주세요" />
          </div>
        </div>
        <CFormButton text="로그인" />
      </form>
    </section>
  );
}

export default SignIn;
