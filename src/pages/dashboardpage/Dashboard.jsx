import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import CreateModal from "../../components/modals/CreateModal";
import DeleteModal from "../../components/modals/DeleteModal";
import NewFolder from "../../components/folder/NewFolder";
import NewForm from "../../components/form/NewForm";
import createfolder from "../../assets/createfolder.svg";
import createform from "../../assets/createform.svg";

const DashboardPage = () => {
    const [modalData, setModalData] = useState({ isVisible: false, title: "", onSubmit: null });
    const [deleteModalData, setDeleteModalData] = useState({ isVisible: false, folderId: null });
    const [folders, setFolders] = useState([]);
    const [forms, setForms] = useState([]);

    // For navigation control
    const navigate = useNavigate();

    // Handle navigation (settings or logout)
    const handleNavigation = (e) => {
        const selectedOption = e.target.value;
        if (selectedOption === "settings") {
            navigate("/settings");
        } else if (selectedOption === "logout") {
            console.log("User logged out");
        } 
    };

    // Function to open the "Create Folder" modal
    const handleCreateFolder = () => {
        setModalData({
          isVisible: true,
          title: "Create a Folder",
          onSubmit: (folderName) => {
            if (folderName) {
                const newFolder = { id: Date.now(), folderName };    // Unique ID and folderName
                setFolders([...folders, newFolder]);                // Add folder to the list
            };
            window.alert("Folder created");
            closeModal();           // Close the modal
          }
        });
    };

    // Function to open the "Create Form" modal
    const handleCreateForm = () => {
        setModalData({
          isVisible: true,
          title: "Create a Form",
          onSubmit: (formName) => {
            if (formName) {
                const newForm = { id: Date.now(), formName };       // Unique ID and formName
                setForms([...forms, newForm]);                      // Add form to the list
            };
            window.alert("Form created");
            closeModal();           // Close the modal
          }
        });
    };

    // Close modal handler
    const closeModal = () => {
        setModalData({ ...modalData, isVisible: false });           // Close modal handler
    };

    // Open the delete modal with the specified type (folder or form) and ID
    const openDeleteModal = (type, id) => {
        setDeleteModalData({ isVisible: true, type, id });
    };

    // Handle deletion confirmation (for folders and forms)
    const handleDeleteConfirm = () => {
        if (deleteModalData.type === "folder") {
            setFolders(folders.filter((folder) => folder.id !== deleteModalData.id));
        } else if (deleteModalData.type === "form") {
            setForms(forms.filter((form) => form.id !== deleteModalData.id));
        }
        closeDeleteModal();             // Close delete modal after confirming
    };

    // Close delete modal
    const closeDeleteModal = () => {
        setDeleteModalData({ isVisible: false,  type: "", id: null });          // Reset delete modal state
    };

    return (
        <div className={styles.dashboardpageContainer}>
            {/*         Dashboard Navbar        */}
            <div className={`${styles.dashboardNav} flex dir-row align-center`}>
                <div className="bg-transparent">
                    <select name="" className={`${styles.workspaceNameContainer} bg-transparent text-white`} onChange={handleNavigation}>
                        <option value="workspace" className="text-white bg-transparent">UserName workspace</option>
                        <option value="settings" className="text-white bg-transparent">Settings</option>
                        <option value="logout" className="text-white bg-transparent">Log Out</option>
                    </select>
                </div>
                <div className="flex dir-row align-center">
                    {/* <ThemeSlider /> */}
                </div>
                <div className="flex align-center">
                    <button className={`${styles.shareBtn} text-white text-16 font-wt-500 outline-none border-none bg-transparent`}>Share</button>
                </div>
            </div>
            {/*         Dashboard Main Content          */}
            <div className={styles.dashboardMainContainer}>
                <div className={styles.folderFormContainer}>
                    <div className={`${styles.flexWrapNow} flex dir-row`}>
                        <div className={`${styles.flexWrapNow} m-r-10`}>
                            <button className={`${styles.createFolderBtn} outline-none border-none cursor-pointer flex dir-row justify-center align-center`} onClick={handleCreateFolder}>
                                <img src={createfolder} alt="create folder icon" />
                                <span className="font-open-sans font-wt-400 text-16 text-white">Create a folder</span>
                            </button>
                        </div>
                        <div className={`${styles.flexWrapNow} flex dir-row`}>
                            {folders.map((folder) => (
                                <NewFolder key={folder.id} folderName={folder.folderName} folderId={folder.id} onDelete={() => openDeleteModal("folder", folder.id)} />
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.flexWrapNow} flex dir-row m-t-40`}>
                        <div className="m-r-15">
                            <button className={`${styles.createFormBtn} outline-none border-none cursor-pointer flex dir-col align-center justify-center`} onClick={handleCreateForm}>
                                <img src={createform} alt="create form icon" />
                                <span className="font-open-sans font-wt-400 text-16 text-white">Create a typebot</span>
                            </button>
                        </div>
                        <div className={`${styles.flexWrapNow} flex dir-row`}>
                            {forms.map((form) => (
                                <NewForm key={form.id} formName={form.formName} formId={form.id} onDelete={() => openDeleteModal("form", form.id)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*             Modal Container          */}
            {/*         Delete Modal           */}
            {deleteModalData.isVisible && (
                <div className={styles.modalViewContainer}>
                    <DeleteModal type={deleteModalData.type} onConfirm={handleDeleteConfirm} onCancel={closeDeleteModal} />
                </div>
            )}
            {/*         folder & form modal     */}
            {modalData.isVisible && (
            <div className={styles.modalViewContainer}>
                <CreateModal title={modalData.title} onSubmit={modalData.onSubmit} onCancel={closeModal} />
            </div>
            )}
        </div>
    )
};

export default DashboardPage;
