import React from 'react'
import styles from "./modals.module.css";

const DeleteModal = ({type, onConfirm, onCancel}) => {
  return (
    <div className={`${styles.deleteModal} flex dir-col justify-space-around`}>
        <div className='text-center'>
            <p className='text-28 font-open-sans font-wt-600 text-white'>Are you sure you want to</p> 
            <p className='text-28 font-open-sans font-wt-600 text-white'>{`delete this ${type} ?`}</p>
        </div>
        <div className='flex dir-row align-center justify-space-around'>
            <button className={`${styles.confirmBtn} text-28 font-open-sans font-wt-600 bg-transparent outline-none border-none cursor-pointer`} onClick={onConfirm}>Confirm</button>
            <span className={styles.verticalLine}>|</span>
            <button className={`text-28 text-white font-open-sans font-wt-600 bg-transparent outline-none border-none cursor-pointer`} onClick={onCancel}>Cancel</button>
        </div>
    </div>
  )
}

export default DeleteModal;
