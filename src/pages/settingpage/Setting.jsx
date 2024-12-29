import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./setting.module.css";
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

  const navigate = useNavigate();

  const hanldeUpdateUser = async (e) => {
    e.preventDefault();
    
    // If newPassword is provided, ensure oldPassword is also included
    if (updateFormData.newPassword && !updateFormData.oldPassword) {
      alert('Please provide your old password to change your password');
      return;
    }

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

  const handleLogout = () => {
    // Remove user data from localStorage (i.e., token and userId)
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    
    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <div className={`${styles.settingsContainer} flex dir-col align-center position-relative`}>
      <div className='font-open-sans font-wt-600 text-white text-22 m-t-30 m-b-40'>Settings</div>
      <form onSubmit={hanldeUpdateUser}>
        <div className={`${styles.settingInpContainer} flex dir-row align-center m-b-20`}>
          <img className={`${styles.inputIconsProfile} m-lr-10`} src={profile} alt="profile icon" />
          <input className={`${styles.settingInput} outline-none border-none bg-transparent text-white text-20`} type="text" placeholder='Name' name='userName' value={updateFormData.userName} onChange={(e) => setUpdateFormData({...updateFormData, [e.target.name]: e.target.value})} />
        </div>
        <div className={`${styles.settingInpContainer} flex dir-row align-center m-b-20`}>
          <img className={styles.inputIcons} src={lock} alt="lock icon" />
          <input className={`${styles.settingInput} outline-none border-none bg-transparent text-white text-20`} type="text" placeholder='Update Email' name='email' value={updateFormData.email} onChange={(e) => setUpdateFormData({...updateFormData, [e.target.name]: e.target.value})} />
          <img className={styles.inputIcons} src={view} alt="view icon" />
        </div>
        <div className={`${styles.settingInpContainer} flex dir-row align-center m-b-20`}>
          <img className={styles.inputIcons} src={lock} alt="lock icon" />
          <input className={`${styles.settingInput} outline-none border-none bg-transparent text-white text-20`} type="text" placeholder='Old Password' name='oldPassword' value={updateFormData.oldPassword} onChange={(e) => setUpdateFormData({...updateFormData, [e.target.name]: e.target.value})} />
          <img className={styles.inputIcons} src={view} alt="view icon" />
        </div>
        <div className={`${styles.settingInpContainer} flex dir-row align-center m-b-40`}>
          <img className={styles.inputIcons} src={lock} alt="lock icon" />
          <input className={`${styles.settingInput} outline-none border-none bg-transparent text-white text-20`} type="text" placeholder='New Password' name='newPassword' value={updateFormData.newPassword} onChange={(e) => setUpdateFormData({...updateFormData, [e.target.name]: e.target.value})} />
          <img className={styles.inputIcons} src={view} alt="view icon" />
        </div>
        <div>
          <button className={`${styles.updateBtn} font-open-sans font-wt-400 text-20 text-white outline-none border-none cursor-pointer`} type='submit'>Update</button>
        </div>
      </form>
      <div className={`${styles.logoutBtnContainer} position-absolute`}>
        <button onClick={handleLogout} className={`${styles.logoutBtn} flex dir-row align-center bg-transparent outline-none border-none cursor-pointer`}>
          <img className={`${styles.logoutIcon} m-r-10`} src={logoutArrow} alt="log out arrow" />
          <span className='text-16 font-wt-500 font-poppins'>Log out</span>
        </button>
      </div>
    </div>
  )
};

export default SettingPage;
