import React from 'react';
import styles from "../../pages/dashboardpage/dashboard.module.css";
import deleteIcon from "../../assets/delete.svg";

const NewForm = ({formName, formId, onDelete}) => {
    // Function to handle folder deletion
    const handleFormDelete = async (formId) => {
        try {
            const response = await fetch(`/api/forms/${formId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Remove the form from the state after successful deletion
                setForms(forms.filter(form => form.id !== formId));
                alert("Form deleted successfully.");
            } else {
                alert("Failed to delete form.");
            }
        } catch (error) {
            console.error("Error deleting form:", error);
            alert("An error occurred while deleting the form.");
        }
    };
    
    return (
        <div className={`${styles.newForm} flex dir-row justify-center align-center position-relative`}>
            <button className="bg-transparent font-open-sans font-wt-400 text-18 text-white outline-none border-none cursor-pointer flex dir-row justify-center align-center">{formName}</button>
            <button onClick={() => onDelete(formId)} className={`${styles.cornerDeleteBtn} bg-transparent outline-none border-none cursor-pointer position-absolute`}>
                <img className={styles.cornerDeleteIcon} src={deleteIcon} alt="delete icon" />
            </button>
        </div>
    )
};

export default NewForm;
