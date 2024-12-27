import React from 'react';
import styles from "../../pages/dashboardpage/dashboard.module.css";
import deleteIcon from "../../assets/delete.svg";

const NewFolder = ({folderName, folderId, onDelete}) => {
  // Function to handle folder deletion
  const handleFolderDelete = async (folderId) => {
  try {
    const response = await fetch(`/api/folders/${folderId}`, {
      method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
          // Remove the folder from the state after successful deletion
          setFolders(folders.filter(folder => folder.id !== folderId));
          alert("Folder deleted successfully.");
      } else {
          alert("Failed to delete folder.");
      }
  } catch (error) {
      console.error("Error deleting folder:", error);
      alert("An error occurred while deleting the folder.");
  }
  };

  return (
    <div className={`${styles.newFolder} flex dir-row align-center position-relative`}>
        <button className={`${styles.folderName} font-open-sans font-wt-400 text-18 text-white bg-transparent outline-none border-none cursor-pointer`}>{folderName}</button>
        <button onClick={() => onDelete(folderId)} className={`${styles.deleteBtn} bg-transparent outline-none border-none cursor-pointer position-absolute`}>
            <img className={styles.deleteIcon} src={deleteIcon} alt="delete icon" />
        </button>
    </div>
  )
};

export default NewFolder;
