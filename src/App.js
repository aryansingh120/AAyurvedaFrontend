import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Scroll from './Components/Scroll';
import Register from './Components/Register';
import VerifyOtp from './Components/VerifyOtp';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Paras from './Components/Paras';
import LoginPage from './Components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './Components/SignupPage';
import VerifyOtpPage from './Components/VerifyOtpPage';
import Nutrition from './Components/Nutrition';
import Footer from './Components/Footer';
import ScrollText from './Components/ScrollText';
import ProductDetails from './Components/ProductDetails';
import Review from './Components/Review';



function App() {
  return (
    <div className="">
    <Routes>
    <Route path={"/"} element={<> <Scroll/>  <ScrollText/> <Paras/>  <Nutrition/>  </>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/verifyOtp' element={<VerifyOtpPage/>}/>
    <Route path='/productDetails' element={<ProductDetails/>}/>




    </Routes>
  {/* <Nav/> */}
    {/* <Navbar/> */}
    {/* <Scroll/> */}
    {/* <Services/> */}
    {/* <Paras/> */}
   {/* <LoginPage/> */}
   {/* <SignupPage/> */}
   {/* <VerifyOtpPage/> */}
   {/* <Nutrition/> */}
  {/* <Footer/> */}
  {/* <ProductDetails/> */}
  {/* <Review/> */}
    </div>
  );
}

export default App;
