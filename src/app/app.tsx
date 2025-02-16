import SignUp from '@/components/HW3_FormUI/SignUp';
import SignIn from '@/components/HW3_FormUI/SignIn';
import CoupangCoupangSignIn from '@/components/HW3_Coupang/CoupangSignIn';
import './app.css';
import Cart from '@/components/HW4.Cart/Cart';
import SearchForm from '@/components/HW5.Search/Components/SearchForm';
import Search from '@/components/HW5.Search/Search';

function App() {
  return (
    <div className="App">
      {/* <CoupangCoupangSignIn />
      <SignUp />
      <SignIn /> */}
      <Search/>
    </div>
  );
}

export default App;
