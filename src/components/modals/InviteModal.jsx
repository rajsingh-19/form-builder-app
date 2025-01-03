import React, { useState } from 'react'
import styles from "./modals.module.css";
import { getUser, shareDashboard } from '../../services';
import closeIcon from "../../assets/close.svg";
import editDropDown from "../../assets/editDropDown.svg";

const InviteModal = ({ onCancel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dashboardId = localStorage.getItem('dashboardId');
  const [email, setEmail] = useState('');
  const [accessMode, setAccessMode] = useState('view');
  
  let userId = '';
  
  const handleChange = (event) => {
    setEmail(event.target.value); // Update state with the new input value
  };

  const handleChangeMode = (newMode) => {
    setAccessMode(newMode);  // Update state with the new access mode
    handleOpenOption();
  };

  const handleOpenOption = () => {
    setIsOpen(prev => !prev);
  };

  const handleSubmit = async () => {
    const result = await getUser(email);
    const data = await result.json();
    userId = data.userId;
    if (data.success === true) {
      const response = await shareDashboard(accessMode, userId, dashboardId);
      const reply = await response.json();
      console.log(reply);
      alert("Dashboard shared successfully !!");
      onCancel();
    } else {
      alert("Email not found, Please register this first !!");
    }
  }

  return (
    <div className={`${styles.inviteModalContainer} flex dir-col text-white position-relative`}>
      <div className='flex dir-row justify-space-btwn m-t-40 m-b-20'>
        <div className=''>
          <p className='font-open-sans font-wt-600 text-22'>Invite by Email</p>
        </div>
        {/*           access mode      */}
        <div className='flex dir-col'>
          <button onClick={handleOpenOption} className='bg-transparent outline-none border-none text-white cursor-pointer'>
            <span className='m-r-5 font-wt-600 font-open-sans text-14'>{accessMode}</span>
            <img src={editDropDown} alt="edit drop down icon" />
          </button>
          {isOpen && ( 
            <div className={`${styles.editDropDown} flex dir-col`}>
              <button className='bg-transparent font-wt-600 font-open-sans text-14 outline-none border-none text-white cursor-pointer' onClick={() => handleChangeMode('edit')} >edit</button>
              <button className='bg-transparent font-wt-600 font-open-sans text-14 outline-none border-none text-white cursor-pointer' onClick={() => handleChangeMode('view')} >view</button>
            </div>
          )}
        </div>
      </div>
      <div className='flex dir-col m-b-25'>
        <input className={`${styles.emailInput} text-18 text-white outline-none border-none p-lr-15 m-b-25`} type="email" id="email" value={email} onChange={handleChange} placeholder='Enter email id'/>
        <button className={`${styles.sendInvite} text-16 text-white font-wt-500 font-poppins text-center outline-none border-none cursor-pointer`} onClick={handleSubmit} >Send Invite</button>
      </div>
      {/*       Invite by Link     */}
      <div className='flex dir-col m-b-15'>
        <p className='text-22 font-wt-600 font-open-sans m-b-20'>Invite by link</p>
        <button className={`${styles.copyLink} text-16 text-white font-wt-500 font-poppins text-center outline-none border-none cursor-pointer`}>Copy link</button>
      </div>
      {/*           Close Icon     */}
      <button onClick={onCancel} className={`${styles.closeIconContainer} position-absolute bg-transparent outline-none border-none cursor-pointer`}>
        <img className={styles.closeIcon} src={closeIcon} alt="close icon" />
      </button>
    </div>
  )
}

export default InviteModal;
