import React, { useState } from 'react'
import "./settingpage.css";
import { updateUser } from '../../services';
import profile from "../../assets/profile.svg";
import view from "../../assets/view.svg";
import lock from "../../assets/lock.svg";
import logoutArrow from "../../assets/logoutArrow.svg";

const SettingPage = () => {
  const [updateFormData, setUpdateFormData] = useState({
    userName: '',
    email: '',
    oldPassword: '',
    newPassword: ''
  });

  const hanldeUpdateUser = async (e) => {
    e.preventDefault();
    const res = await updateUser(updateFormData);           // Call the registration service
    if(res.status === 200) {
      // Reset form data after successful registration
      setRegisterFormData({
        userName: '',
        email: '',
        password: '',
        newPassword: ''
      });
      alert("User Updated Successfully");
    } else {
      console.log(res);
      alert("An Error Occured");
    }
  };

  return (
    <div className='settings-container flex dir-col align-center position-relative'>
      <div className='font-open-sans font-wt-600 text-white text-22 m-t-30 m-b-40'>Settings</div>
      <form onSubmit={hanldeUpdateUser}>
        <div className='setting-inp-container flex dir-row align-center m-b-20'>
          <img className='input-icons-profile m-lr-10' src={profile} alt="profile icon" />
          <input className='setting-input outline-none border-none bg-transparent text-white text-20' type="text" placeholder='Name' name='userName' value={updateFormData.userName} onChange={(e) => setUpdateFormData({...updateFormData, [e.target.name]: e.target.value})} />
        </div>
        <div className='setting-inp-container flex dir-row align-center m-b-20'>
          <img className='input-icons' src={lock} alt="lock icon" />
          <input className='setting-input outline-none border-none bg-transparent text-white text-20' type="text" placeholder='Update Email' name='email' value={updateFormData.email} onChange={(e) => setUpdateFormData({...updateFormData, [e.target.name]: e.target.value})} />
          <img className='input-icons' src={view} alt="view icon" />
        </div>
        <div className='setting-inp-container flex dir-row align-center m-b-20'>
          <img className='input-icons' src={lock} alt="lock icon" />
          <input className='setting-input outline-none border-none bg-transparent text-white text-20' type="text" placeholder='Old Password' name='oldPassword' value={updateFormData.oldPassword} onChange={(e) => setUpdateFormData({...updateFormData, [e.target.name]: e.target.value})} />
          <img className='input-icons' src={view} alt="view icon" />
        </div>
        <div className='setting-inp-container flex dir-row align-center m-b-40'>
          <img className='input-icons' src={lock} alt="lock icon" />
          <input className='setting-input outline-none border-none bg-transparent text-white text-20' type="text" placeholder='New Password' name='newPassword' value={updateFormData.newPassword} onChange={(e) => setUpdateFormData({...updateFormData, [e.target.name]: e.target.value})} />
          <img className='input-icons' src={view} alt="view icon" />
        </div>
        <div>
          <button className='update-btn font-open-sans font-wt-400 text-20 text-white outline-none border-none cursor-pointer' type='submit'>Update</button>
        </div>
      </form>
      <div className='logout-btn-container position-absolute'>
        <button className='logout-btn flex dir-row align-center bg-transparent outline-none border-none cursor-pointer'>
          <img className='logout-icon m-r-10' src={logoutArrow} alt="log out arrow" />
          <span className='text-16 font-wt-500 font-poppins'>Log out</span>
        </button>
      </div>
    </div>
  )
};

export default SettingPage;

