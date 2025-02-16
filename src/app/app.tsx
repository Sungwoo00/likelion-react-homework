import SignUp from '@/components/HW3_FormUI/SignUp';
import SignIn from '@/components/HW3_FormUI/SignIn';
import CoupangCoupangSignIn from '@/components/HW3_Coupang/CoupangSignIn';
import './app.css';
import Cart from '@/components/HW4.Cart/Cart';
import SearchForm from '@/components/HW5.Search/SearchForm';

function App() {
  return (
    <div className="App">
      {/* <CoupangCoupangSignIn />
      <SignUp />
      <SignIn /> */}
      <SearchForm/>
    </div>
  );
}

export default App;
