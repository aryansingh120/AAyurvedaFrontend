import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Scroll from './Components/Scroll';
import Register from './Components/Register';
import VerifyOtp from './Components/VerifyOtp';
import Login from './Components/Login';
import Services from './Components/Services';
import Nav from './Components/Nav';
import Paras from './Components/Paras';
import LoginPage from './Components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './Components/SignupPage';
import VerifyOtpPage from './Components/VerifyOtpPage';
import Nutrition from './Components/Nutrition';



function App() {
  return (
    <div className="">
    <Routes>
    <Route path={"/"} element={<><Nav/> <Scroll/> <Paras/>  <Nutrition/> </>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/verifyOtp' element={<VerifyOtpPage/>}/>



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
    </div>
  );
}

export default App;
