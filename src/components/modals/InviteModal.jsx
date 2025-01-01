import React, { useState } from 'react'
import styles from "./modals.module.css";
import closeIcon from "../../assets/close.svg";
import editDropDown from "../../assets/editDropDown.svg";

const InviteModal = ({ onCancel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenOption = () => {
    setIsOpen(prev => !prev);
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
            <span className='m-r-5 font-wt-600 font-open-sans text-14'>view</span>
            <img src={editDropDown} alt="edit drop down icon" />
          </button>
          {isOpen && ( 
            <div className={`${styles.editDropDown} flex dir-col`}>
              <button className='bg-transparent font-wt-600 font-open-sans text-14 outline-none border-none text-white cursor-pointer'>edit</button>
              <button className='bg-transparent font-wt-600 font-open-sans text-14 outline-none border-none text-white cursor-pointer'>view</button>
            </div>
          )}
        </div>
      </div>
      <div className='flex dir-col m-b-25'>
        <input className={`${styles.emailInput} text-18 text-white outline-none border-none p-lr-15 m-b-25`} type="text" placeholder='Enter email id'/>
        <button className={`${styles.sendInvite} text-16 text-white font-wt-500 font-poppins text-center outline-none border-none cursor-pointer`}>Send Invite</button>
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
