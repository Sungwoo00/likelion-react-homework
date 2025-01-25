import FormInput from './FormInput';

function SignUp() {
  return (
    <section>
      <h2>회원가입 정보 입력 페이지</h2>
      <form>
        <FormInput
          title="이름"
          type="text"
          name="이름"
          value="안녕"
          onChange={(value) => console.log(value)}
        />
      </form>
    </section>
  );
}

export default SignUp;
