import React from 'react';
import styles from "../../pages/dashboardpage/dashboard.module.css";
import deleteIcon from "../../assets/delete.svg";

const NewFolder = ({folderName, folderId, onDelete, className}) => {
  return (
    <div className={`${styles.newFolder} flex dir-row align-center position-relative`}>
        <button className={`${styles.folderName} ${className} text-white font-open-sans font-wt-400 text-18 bg-transparent outline-none border-none cursor-pointer`}>{folderName}</button>
        <button onClick={() => onDelete(folderId)} className={`${styles.deleteBtn} bg-transparent outline-none border-none cursor-pointer position-absolute`}>
            <img className={styles.deleteIcon} src={deleteIcon} alt="delete icon" />
        </button>
    </div>
  )
};

export default NewFolder;
