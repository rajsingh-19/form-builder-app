import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ellipse1 from "../../assets/ellipse1.png";
import ellipse2 from "../../assets/ellipse2.png";
import group2 from "../../assets/group2.svg";
import googleIcon from "../../assets/googleIcon.svg";
import backArrow from "../../assets/backArrow.svg"
import { loginUser } from "../../services/index";

const LoginPage = () => {
    // State to manage form data for login
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    // Initialize the useNavigate hook to programmatically navigate between routes
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!loginFormData.email.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(loginFormData.email)) {
            errors.email = "Invalid email format";
        }
        
        if (!loginFormData.password.trim()) {
            errors.password = "Password is required";
        }
        
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    
    // Function to handle form submission for user login
    const handleLoginUser = async (e) => {
        e.preventDefault();     // Prevent default form submission behavior

        if (!validateForm()) return;

        try {
            const res = await loginUser(loginFormData);       // Call the login service
            
            if(res.status === 200) {
                const data = await res.json();

                // Extract the token and userId
                const token = data.token;
                const userId = data.userId;

                // Save token or userId in localStorage
                localStorage.setItem("token", token); // Save token for later use
                localStorage.setItem("userId", userId); // Save userId

                // Reset form data after successful registration
                setLoginFormData({
                    email: '',
                    password: '',
                });
                alert("Login Successfully");
                navigate(`/dashboard/${userId}`); // Navigate to the dashboard with userId
            } else {
                // Extract the error message from the response if available
                const errorData = await res.json();
                const errorMessage = errorData.message || "An error occurred"; // Default message if no message exists
                alert(errorMessage);  // Show the error message from the backend
            } 
        } catch (error) {
            console.log(error);
            alert("An unexpected error occurred:", error);
        }
    };
      
    const handlePrevBtn = () => {       //      function for go to landing page 
        navigate('/');
    };
    
    const handleRegisterBtn = () => {       //      function for go to register page 
        navigate('/register');
    };

    return (
        <div className="register-login-container position-relative">
            <div className='backArrowContainer position-absolute'>
                <button onClick={handlePrevBtn} className='bg-transparent outline-none border-none cursor-pointer'>
                    <img className='backArrowIcon' src={backArrow} alt="back arrrow icon" />
                </button>
            </div>
            {/* Form for user login */}
            <form onSubmit={handleLoginUser}>
                <div className='flex dir-col m-b-15'>
                    <label className='text-white letter-spacing-2 m-b-10 text-14 font-wt-500 font-poppins'>Email</label>
                    <input type="email" className='input bg-transparent letter-spacing-2 outline-none font-wt-300 font-poppins' placeholder='Enter your email' name={"email"} value={loginFormData.email} onChange={(e) => setLoginFormData({...loginFormData, [e.target.name]: e.target.value})} />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className='flex dir-col m-b-15'>
                    <label className='text-white letter-spacing-2 m-b-10 text-14 font-wt-500 font-poppins'>Password</label>
                    <input type="password" className='input bg-transparent letter-spacing-2 outline-none font-wt-300 font-poppins' placeholder='**********' name={"password"} value={loginFormData.password} onChange={(e) => setLoginFormData({...loginFormData, [e.target.name]: e.target.value})} />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <div className='m-b-10'>
                    <button className='signup-login-btn outline-none border-none cursor-pointer text-white m-b-10 text-14 letter-spacing-2 font-wt-500 font-poppins' type="submit">Log in</button>
                    <p className='text-white text-center text-12 font-wt-300 font-poppins'>OR</p>
                </div>
            </form>
            <div className='m-b-15'>
                <button className='signup-login-btn flex align-center justify-center outline-none border-none cursor-pointer text-white text-14 letter-spacing-2'><img className='google-icon' src={googleIcon} alt="google icon" /><span className='p-lr-20 font-wt-500 font-poppins'>Sign Up with Google</span></button>
            </div>
            <div className='flex dir-row'>
                <p className='text-14 text-white font-wt-400 font-inter'>Don't have an account ?</p>&nbsp;<button onClick={handleRegisterBtn} className='text-14 bg-transparent border-none registerNow-btn font-wt-400 font-inter cursor-pointer'>Register Now</button>
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
    );
}

export default LoginPage;
