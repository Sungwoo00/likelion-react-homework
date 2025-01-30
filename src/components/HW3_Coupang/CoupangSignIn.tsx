import { useState } from 'react';
import FormCheckBox from '../HW3_Coupang/Form/FormCheckBox';
import CFormButton from './Form/CFormButton';
import CFormInput from './Form/CFormInput';
import Divider from './UI/Divider';
import symbol from '../../assets/UI/symbol.svg';
import coupang from '../../assets/UI/coupang.svg';
import '../../styles/Coupang/CoupangSignIn.css';

function CoupangSignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    autoLogin: false,
  });

  const handleChange = (key: string, value: string | boolean) => {
    setFormData({ ...formData, [key]: value });
  };
  console.log('formData:', formData);

  const handleSubmit = () => {
    console.log(formData);
  };

  const isFormValid = formData.email && formData.password;
  return (
    <section>
      <h2>
        <span className="sr-only">쿠팡 로그인 사이트</span>
        <img
          width="256"
          height="56"
          src={coupang}
          alt=""
          className="CoupangSignIn__logo"
        />
      </h2>
      <form className="CoupangCoupangSignIn" action={handleSubmit}>
        <div className="CoupangCoupangSignInForm">
          <CFormInput
            title="아이디"
            type="email"
            name="CoupangSignIn_email"
            placeholder="아이디(이메일)"
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
          />
          <CFormInput
            title="비밀번호"
            type="password"
            name="CoupangSignIn_password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            isToggle
          />
          <div className="CoupangSignInForm__checkbox">
            <FormCheckBox
              checked={formData.autoLogin}
              tooltipText="개인 정보 보호를 위해 본인 기기에서만 이용해주세요"
              onChange={(checked) => handleChange('autoLogin', checked)}
            />
            <div className="CoupangSignInForm__find">
              <a href="#" className="CoupangSignInForm__find-link">
                아이디(이메일)/비밀번호 찾기
                <img
                  src={symbol}
                  alt=""
                  className="CoupangSignInForm__find-arrow"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
        <CFormButton
          text="로그인"
          mode={isFormValid ? 'Primary' : undefined}
          disabled={!isFormValid}
        />
        <Divider />
        <CFormButton text="회원가입" mode="Secondary" disabled={false} />
      </form>
    </section>
  );
}

export default CoupangSignIn;
