import SignUp from '@/components/HW3_FormUI/SignUp';
import SignIn from '@/components/HW3_FormUI/SignIn';
import CoupangCoupangSignIn from '@/components/HW3_Coupang/CoupangSignIn';
import './app.css';
import Cart from '@/components/HW4.Cart/Cart';

function App() {
  return (
    <div className="App">
      {/* <CoupangCoupangSignIn />
      <SignUp />
      <SignIn /> */}
      <Cart/>
    </div>
  );
}

export default App;
