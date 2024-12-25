import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ellipse1 from "../../assets/ellipse1.png";
import ellipse2 from "../../assets/ellipse2.png";
import group2 from "../../assets/group2.svg";
import googleIcon from "../../assets/googleIcon.svg";
import backArrow from "../../assets/backArrow.svg"
import { registerUser } from '../../services';

const RegisterPage = () => {
  // State to manage form data for registration
  const [registerFormData, setRegisterFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();     // Hook for navigating to other routes

  // Function to handle form submission for user registration
  const handleUserRegister = async (e) => {
    e.preventDefault();     // Prevent default form submission behavior
    //  check if the password and confirm password are same 
    if (registerFormData.password !== registerFormData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const res = await registerUser(registerFormData);       // Call the registration service
    // console.log(res);
    if(res.status === 201) {
      // Reset form data after successful registration
      setRegisterFormData({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      alert("Registered Successfully");
    } else {
      console.log(res);
      alert("An Error Occured");
    } 
  };

  // Function to navigate back to the home page
  const handlePrevBtn = () => {
    navigate('/');
  };
  // Function to navigate to the login page
  const handleLoginBtn = () => {
    navigate('/login')
  };

  return (
    <div className='register-login-container position-relative'>
      <div className='backArrowContainer position-absolute'>
        <button onClick={handlePrevBtn} className='bg-transparent outline-none border-none cursor-pointer'>
          <img className='backArrowIcon' src={backArrow} alt="back arrrow icon" />
        </button>
      </div>
      {/* Form for user registration */}
      <form onSubmit={handleUserRegister}>
        <div className='flex dir-col m-b-15'>
          <label className='text-white letter-spacing-2 m-b-10 text-14 font-wt-500 font-poppins'>Username</label>
          <input type="text" className='input bg-transparent letter-spacing-2 outline-none font-wt-300 font-poppins' placeholder='Enter a username' name={"userName"} value={registerFormData.userName} onChange={(e) => setRegisterFormData({...registerFormData, [e.target.name]: e.target.value})} />
        </div>
        <div className='flex dir-col m-b-15'>
          <label className='text-white letter-spacing-2 m-b-10 text-14 font-wt-500 font-poppins'>Email</label>
          <input type="text" className='input bg-transparent letter-spacing-2 outline-none font-wt-300 font-poppins' placeholder='Enter your email' name={"email"} value={registerFormData.email} onChange={(e) => setRegisterFormData({...registerFormData, [e.target.name]: e.target.value})} />
        </div>
        <div className='flex dir-col m-b-15'>
          <label className='text-white letter-spacing-2 m-b-10 text-14 font-wt-500 font-poppins'>Password</label>
          <input type="text" className='input bg-transparent letter-spacing-2 outline-none font-wt-300 font-poppins' placeholder='**********' name={"password"} value={registerFormData.password} onChange={(e) => setRegisterFormData({...registerFormData, [e.target.name]: e.target.value})} />
        </div>
        <div className='flex dir-col m-b-15'>
          <label className='text-white letter-spacing-2 m-b-10 text-14 font-wt-500 font-poppins'>Confirm Password</label>
          <input type="text" className='input bg-transparent letter-spacing-2 outline-none font-wt-300 font-poppins' placeholder='**********' name={"confirmPassword"} value={registerFormData.confirmPassword} onChange={(e) => setRegisterFormData({...registerFormData, [e.target.name]: e.target.value})} />
        </div>
        <div className='m-b-10'>
          <button className='signup-login-btn outline-none border-none cursor-pointer text-white m-b-10 text-14 letter-spacing-2 font-wt-500 font-poppins' type="submit">Sign Up</button>
          <p className='text-white text-center text-12 font-wt-300 font-poppins'>OR</p>
        </div>
      </form>
      {/* Google Sign-up button */}
      <div className='m-b-15'>
        <button className='signup-login-btn flex align-center justify-center outline-none border-none cursor-pointer text-white text-14 letter-spacing-2'><img className='google-icon' src={googleIcon} alt="google icon" /><span className='p-lr-20 font-wt-500 font-poppins'>Sign Up with Google</span></button>
      </div>
      <div className='flex dir-row'>
        <p className='text-14 text-white font-wt-400 font-inter'>Already have an account ?</p>&nbsp;<button onClick={handleLoginBtn} className='text-14 bg-transparent border-none loginNow-btn font-wt-400 font-inter cursor-pointer'>Login</button>
      </div>
      {/*               bg svgs        */}
      <div className="ellipse1-container position-absolute">
        <img src={ellipse1} alt="Ellipse Decoration" />
      </div>
      <div className="ellipse2-container position-absolute">
        <img src={ellipse2} alt="Ellipse Decoration" />
      </div>
      <div className="group2-container position-absolute">
        <img src={group2} alt="Ellipse Decoration" />
      </div>
    </div>
  )
}

export default RegisterPage;
