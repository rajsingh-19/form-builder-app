import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import CreateFolderModal from "../../components/modals/CreateFolderModal";
import CreateFormModal from "../../components/modals/CreateFormModal";

const DashboardPage = () => {
    const [folderModal, setFolderModal] = useState(false);
    const [formModal, setFormModal] = useState(false);

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const selectedOption = e.target.value;
        if (selectedOption === "settings") {
            navigate("/settings");
        } else if (selectedOption === "logout") {
            console.log("User logged out");
        } 
    };

    const handleCreateFolder = () => {
        setFolderModal(true);    
    };

    const handleCreateForm = () => {
        setFormModal(true);
    }

    return (
        <div className={styles.dashboardpageContainer}>
            <div className={`${styles.dashboardNav} flex dir-row align-center`}>
                <div className="bg-transparent">
                    <select name="" className={`${styles.workspaceNameContainer} bg-transparent text-white`} onChange={handleNavigation}>
                        <option value="workspace" className="text-white bg-transparent">UserName workspace</option>
                        <option value="settings" className="text-white bg-transparent">Settings</option>
                        <option value="logout" className="text-white bg-transparent">Log Out</option>
                    </select>
                </div>
                <div className="flex dir-row align-center">
                    <div className="light-dark-toggle">
                        <label className="text-white">
                            <span>light</span>
                            <input type="checkbox" />
                            <span className="slider">dark</span>
                        </label>
                    </div>
                    <div className="flex align-center">
                        <button className={`${styles.shareBtn} text-white text-16 font-wt-500 outline-none border-none bg-transparent`}>Share</button>
                    </div>
                </div>
            </div>
            <div className="dashboardMain">
                <div>
                    <div>
                        <div>
                            <button onClick={handleCreateFolder}>create a folder</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button onClick={handleCreateForm}>create a typebot</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Render the Modal Conditionally */}
            {folderModal && (
                <CreateFolderModal />
            )};
            {formModal && (
                <CreateFormModal />
            )};
        </div>
    )
};

export default DashboardPage;
