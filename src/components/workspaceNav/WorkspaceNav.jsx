import React from "react";
import ThemeSlider from "../themeSlider/ThemeSlider";
import styles from "./workspacenav.module.css";
import closeIcon from "../../assets/close.svg";


const WorkspaceNav =() => {
    const onShareButtonClick = () => {

    };

    const onSaveButtonClick = () => {

    };

    const handleOnClose = () => {
        
    };


  return (
    <nav  className={`${styles.workspaceNav} flex dir-row align-center justify-space-btwn `}>
        <div className={styles.formNameContainer}>
            formName
        </div>
        <div>
            <button>Flow</button>
            <button>Response</button>
        </div>
        <div className='flex dir-row align-center'>
            <span className="text-white m-lr-10">Light</span>
                <ThemeSlider />
            <span className="text-white m-lr-10">Dark</span>
        </div>
        <div className="flex align-center">
            <button onClick={onShareButtonClick} className={`${styles.shareBtn} text-white text-16 font-wt-500 outline-none border-none bg-transparen cursor-pointer`}>Share</button>
            <button onClick={onSaveButtonClick} className={`${styles.shareBtn} text-white text-16 font-wt-500 outline-none border-none bg-transparen cursor-pointer`}>Save</button>            
        </div>
        <div>
            <button onClick={handleOnClose} className={`${styles.closeIconContainer} position-absolute bg-transparent outline-none border-none cursor-pointer`}>
                <img className={styles.closeIcon} src={closeIcon} alt="close icon" />
            </button>
        </div>
    </nav>
  );
}

export default WorkspaceNav;