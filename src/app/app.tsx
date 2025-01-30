import SignUp from '@/components/HW3_FormUI/SignUp';
import SignIn from '@/components/HW3_FormUI/SignIn';
import CoupangCoupangSignIn from '@/components/HW3_Coupang/CoupangSignIn';
import './app.css';

function App() {
  return (
    <div className="App">
      <CoupangCoupangSignIn />
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
