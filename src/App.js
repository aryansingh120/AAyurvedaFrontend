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
import Philosophy from './Components/Philosophy';
import HairOil from './Components/HairOil';
import VideoPlayer from './Components/VideoPlayer';
import CartDetails from './Components/CartDetails';
import OrderAddress from './Components/OrderAddress';
import PaymentOptions from './Components/PaymentOptions';
import ContactUs from './Components/ContactUs';
import NavbarSkeleton from './Components/NavbarSkeleton';
import ScrollSkeleton from './Components/ScrollSkeleton';
import ParasSkeleton from './Components/ParasSkeleton';
import PaymentOptions2 from './Components/PaymentOptions2';

function App() {
  return (
    <div className="">
      <Routes>
      <Route path={"/"} element={<> <Scroll/>  <ScrollText/>   <VideoPlayer/>
      <Paras/>  <Nutrition/>
      </>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/verifyOtp' element={<VerifyOtpPage/>}/>
    <Route path='/productDetails' element={ <><ProductDetails/></>}/>
    <Route path='/cartDetails' element={<CartDetails/>}/>
    <Route path='/orderAddress' element={<OrderAddress/>}/>
    <Route path="/paymentDetails" element={<PaymentOptions/>}/>
    <Route path="/paymentOptions" element={<PaymentOptions2 amount={500} userId="67b88a7bae831f0b6fb4eb65" orderId="order_Pz1XqQ40WXrK27"/>}/>
    {/* <Route path="/paymentOptions" element={<PaymentOptions2/>}/> */}







    </Routes>  
  {/* <Nav/> */}
    {/* <Navbar/> */}
    {/* <Scroll/>
    <ScrollText/>  */}
    {/* <Services/> */}
    {/* <Paras/>
   <LoginPage/>
   <SignupPage/>
   <VerifyOtpPage/>
   <Nutrition/> */}
  {/* <Footer/> */}
  {/* <ProductDetails/> */}
  {/* <Review/> */}
  {/* <HairOil/> */}
  {/* <VideoPlayer/> */}
  {/* <CartDetails/> */}
  {/* <OrderAddress/> */}
  {/* <PaymentOptions/> */}
  {/* <ContactUs/> */}
  {/* <NavbarSkeleton/> 
   <ScrollSkeleton/> 
   <ParasSkeleton/> */}
  {/* <PaymentOptions2 amount={500} userId="67b88a7bae831f0b6fb4eb65" orderId="order_Pz1XqQ40WXrK27"/> */}
    </div>
  );
}

export default App;
