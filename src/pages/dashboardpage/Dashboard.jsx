import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDashboardData, createDashboard, createFolder, createForm, deleteFolder, deleteForm } from "../../services/index";
import DashboardNav from "../../components/dashboardNav/DashboardNav";
import styles from "./dashboard.module.css";
import CreateModal from "../../components/modals/CreateModal";
import DeleteModal from "../../components/modals/DeleteModal";
import NewFolder from "../../components/folder/NewFolder";
import NewForm from "../../components/form/NewForm";
import createfolderIcon from "../../assets/createfolder.svg";
import createformIcon from "../../assets/createform.svg";

const DashboardPage = () => {
    const [userName, setUserName] = useState("");
    const [folders, setFolders] = useState([]);
    const [forms, setForms] = useState([]);
    const [modalData, setModalData] = useState({ isVisible: false, title: "", onSubmit: null });
    const [deleteModalData, setDeleteModalData] = useState({ isVisible: false, folderId: null });
    const [dashboardId, setDashboardId] = useState(localStorage.getItem("dashboardId"));

    // For navigation control
    const navigate = useNavigate();

    // Get userId from URL params
    const { userId } = useParams();  // Retrieve userId from URL

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (!token || !userId) {
            alert("Session expired. Please log in again.");
            navigate("/");
            return;
        };

        const fetchData = async () => {
            try {
                const res = await fetchDashboardData(userId); // Fetch data for user ID
                const data = await res.json();

                if (!data.dashboard) {
                    // If no dashboard exists, create one
                    const newDashboard = await handleCreateDashboard(userId);
                    if (newDashboard) {
                      setFolders(newDashboard.folders || []);
                      setForms(newDashboard.forms || []);
                      setUserName(newDashboard.userName || "User");
                      setDashboardId(newDashboard._id); // Update dashboardId state
                      localStorage.setItem('dashboardId', newDashboard._id);
                    }
                  } else {
                    // If dashboard exists, populate data
                    setFolders(data.dashboard.folders || []);
                    setForms(data.dashboard.forms || []);
                    setUserName(data.userName || "User");
                    // Store the existing dashboardId in localStorage
                    setDashboardId(data.dashboard._id); // Update dashboardId state
                    localStorage.setItem('dashboardId', data.dashboard._id);  // Set the dashboardId
                  }
            } catch (err) {
                console.error(err);
                alert("Error fetching dashboard data.");
            }
        };
        fetchData();
    }, [navigate]);                     // Trigger fetchData when userId changes

    // Create dashboard if not exists
    const handleCreateDashboard = async (userId) => {
        try {
            const response = await createDashboard({ userId });
            return response.data; // Return the created dashboard
        } catch (error) {
            console.error("Error creating dashboard:", error);
            alert("Failed to create dashboard. Please try again.");
            return null;
        }
    };

    // Open the "Create Folder" modal
    const handleCreateFolder = () => {
        if (!dashboardId) {
            alert("Dashboard ID is missing. Please try again later.");
            return;
        };

        setModalData({
          isVisible: true,
          title: "Create a Folder",
          onSubmit: async (folderName) => {
            //     Check if the foldername is empty
            if (!folderName) {
                alert("Folder name cannot be empty.");
                return;
            }

            try {
                const response = await createFolder({ userId, folderName, dashboardId });
                const newFolder = await response.json();

                if (response.ok) {
                    setFolders((prevFolders) => [...prevFolders, newFolder]);   // Update state with new folder
                    alert("Folder created successfully.");
                } else {
                    console.error("Error:", newFolder.message);
                    alert("Failed to create folder: " + (newFolder.message || ""));
                }
            } catch (err) {
                console.error("Error creating folder:", err);
                alert("An error occurred while creating the folder.");
            }
            closeModal();  // Close the modal
          }
        });
    };

    // Function to open the "Create Form" modal
    const handleCreateForm = () => {

        if (!dashboardId) {
            alert("Dashboard ID is missing. Please try again later.");
            return;
        };

        setModalData({
          isVisible: true,
          title: "Create a Form",
          onSubmit: async (formName) => {

            if (!formName) {
                alert("Form name cannot be empty.");
                return;
            }

            try {
                const response = await createForm({ dashboardId, formName });
                const newForm = await response.json();
                
                if (response.ok) {
                    setForms((prevForms) => [...prevForms, newForm]);
                    window.alert("Form created successfully.");
                } else {
                    console.error("Error:", newForm.message);
                    alert("Failed to create form: " + (newForm.message || ""));
                }
            } catch (err) {
                console.error("Error creating form:", err);
                alert("An error occurred while creating the form.");
            }
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
    const handleDeleteConfirm = async () => {
        try {
            if (deleteModalData.type === "folder") {
                const response = await deleteFolder({ userId, folderId: deleteModalData.id, dashboardId });
                console.log(response);
    
                if (response.ok) {
                    setFolders(folders.filter((folder) => folder._id !== deleteModalData.id));
                    alert("Folder deleted successfully.");
                } else {
                    alert("Failed to delete folder.");
                }
            } else if (deleteModalData.type === "form") {
                const response = await deleteForm(formId);
                console.log(response);

                if(response.ok) {
                    setForms(forms.filter((form) => form._id !== deleteModalData.id));
                    alert("Form deleted successfully.");
                } else {
                    alert("Failed to delete folder.");
                }
            }
        } catch (error) {
            console.error("Error during deletion:", error);
            alert("An error occurred while deleting the item.");
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
            <DashboardNav userName={userName} />
            {/*         Dashboard Main Content          */}
            <div className={styles.dashboardMainContainer}>
                <div className={styles.folderFormContainer}>
                    {/*                 Folders Container              */}
                    <div className={`${styles.flexWrapNow} flex dir-row`}>
                        <button className={`${styles.createFolderBtn} outline-none border-none cursor-pointer flex dir-row justify-center align-center`} onClick={handleCreateFolder}>
                            <img src={createfolderIcon} alt="create folder icon" />
                            <span className="font-open-sans font-wt-400 text-16 text-white">Create a folder</span>
                        </button>
                        {folders.map((folder) => (
                            <NewFolder key={folder._id} folderName={folder.name} folderId={folder._id} onDelete={() => openDeleteModal("folder", folder._id)} />
                        ))}
                    </div>
                    {/*                 Forms Container              */}
                    <div className={`${styles.flexWrapNow} flex dir-row m-t-40`}>
                        <button className={`${styles.createFormBtn} outline-none border-none cursor-pointer flex dir-col align-center justify-center`} onClick={handleCreateForm}>
                            <img src={createformIcon} alt="create form icon" />
                            <span className="font-open-sans font-wt-400 text-16 text-white">Create a typebot</span>
                        </button>
                        {forms.map((form) => (
                            <NewForm key={form._id} formName={form.name} formId={form._id} onDelete={() => openDeleteModal("form", form._id)} />
                        ))}
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
