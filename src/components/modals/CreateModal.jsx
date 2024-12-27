import {React, useState} from 'react'
import styles from "./modals.module.css";

const CreateModal = ({title, onSubmit, onCancel}) => {
  const [inputValue, setInputValue] = useState("");

  // Handle the submission of the input value
  const handleSubmit = () => {
    onSubmit(inputValue);       // Pass the input value back to the parent component
  };

  return (
    <div className={`${styles.createModal} flex dir-col justify-space-around`}>
        <div className='text-28 font-open-sans font-wt-600 text-white'>{title}</div>
        <div className={`${styles.inputContainer} flex dir-row `}>
            <input className={`${styles.input} text-white text-22 font-wt-600 font-open-sans bg-transparent outline-none border-none`} value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Enter folder name' />
        </div>
        <div className='flex dir-row align-center justify-space-around'>
            <button className={`${styles.doneBtn} text-28 font-open-sans font-wt-600 bg-transparent outline-none border-none cursor-pointer`} onClick={handleSubmit}>Done</button>
            <span className={styles.verticalLine}>|</span>
            <button className={`text-28 text-white font-open-sans font-wt-600 bg-transparent outline-none border-none cursor-pointer`} onClick={onCancel}>Cancel</button>
        </div>
    </div>
  )
}

export default CreateModal;
