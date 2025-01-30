# HW3_FormUI

> 회원가입과 로그인 폼 UI 컴포넌트 구현에 대한 설명글 입니다.

## 컴포넌트 및 웹 접근성

### 비밀번호 표시 및 숨김 컴포넌트(ToggleVisible.tsx)

- `role="switch"`를 통해 토글 버튼 역할 명시
- `aria-checked`를 통해 상태 전달
- `aria-label`를 통해 상태 메세지 동적으로 전달

### 정보 입력 컴포넌트(FormInput.tsx)

- `htmlFor`와 `id`를 통해 `label`과 `input`을 명시적으로 연결
- `autoComplete="new-password"`로 브라우저 자동완성 기능 끄기
- 비밀번호 표시 및 숨김 토글 버튼 연결
- `type`을 통해 `input type` 동적 변경 가능

### 폼 데이터 제출 버튼 컴포넌트(FormButton.tsx)

- `aria-disabled`로 비활성화 상태 전달
- `useFormSatatus()`로 폼 입력 데이터 제출 상태 관리
- 대기 상태 중 동적인 텍스트 변경

### SinUP 및 SignIn 컴포넌트

#### 공통

- `useState`를 통해 폼 데이터 상태 관리
- `sr-only` 클래스로 접근성 제목 제공
- `handleChange`를 통해 입력값 실시간 갱신
- `handleSubmit`를 통해 폼 제출 데이터 확인 가능
- 입력 필드별 고유 name 속성 부여
- FormInput, FormButton 컴포넌트 재사용

#### 로그인 폼(SignIn.tsx)

- 이름, 패스워드 입력 가능
- 패스워드 보안 입력 및 토글 버튼
- placeholder로 입력창 별 입력 조건 표시
  - 이름: "2글자 이상 입력"
  - 패스워드: "숫자, 영문 조합 6자리 이상 입력"

#### 회원가입 폼(SignUp.tsx)

- 이름, 이메일, 패스워드, 패스워드 확인 입력 가능
- placeholder로 입력창 별 입력 조건 표시
  - 이름: "2글자 이상 입력"
  - 이메일: "sungwoo@gmail.com"
  - 패스워드: "숫자, 영문 조합 6자리 이상 입력"
  - 패스워드 확인: "입력한 패스워드 다시 입력"
