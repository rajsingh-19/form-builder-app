import React from 'react';
import styles from "../../pages/dashboardpage/dashboard.module.css";
import deleteIcon from "../../assets/delete.svg";

const NewForm = ({openForm, dashboardId, folderId, formName, formId, onDelete}) => {
    const handleFormClick = () => {
        openForm(formId, dashboardId, folderId);
    };

    return (
        <div onClick={handleFormClick} className={`${styles.newForm} newForm flex dir-row justify-center align-center m-lr-10 position-relative`}>
            <button className="text-white bg-transparent font-open-sans font-wt-400 text-18 outline-none border-none cursor-pointer flex dir-row justify-center align-center">{formName}</button>
            <button onClick={() => onDelete(formId)} className={`${styles.cornerDeleteBtn} bg-transparent outline-none border-none cursor-pointer position-absolute`}>
                <img className={styles.cornerDeleteIcon} src={deleteIcon} alt="delete icon" />
            </button>
        </div>
    )
};

export default NewForm;
