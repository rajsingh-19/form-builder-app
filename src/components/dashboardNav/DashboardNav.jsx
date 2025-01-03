import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDashboardDatas } from '../../services';
import ThemeSlider from '../themeSlider/ThemeSlider';
import styles from "../../pages/dashboardpage/dashboard.module.css"
import downArrow from "../../assets/downArrow.svg";

const DashboardNav = ({ onShareButtonClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState([]);

    const navigate = useNavigate();

    const handleSettings = () => {
        navigate('/setting');
    };

    const handleLogout = () => {
        // Remove user data from localStorage (i.e., token and userId)
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("dashboardId");
        
        // Redirect the user to the login page
        navigate("/login");
    };

    const handleOpenOption  = () => {
        setIsOpen((prev) => !prev);
    };

    const fetchDashboards = async () => {
        const response = await fetchDashboardDatas(localStorage.getItem('userId'));
        const data = await response.json();
        console.log(data);
        setUserName(data.dashboards);
    };
    
    useEffect(() => {
        fetchDashboards();
    }, []);

    return (
        <nav className={`${styles.dashboardNav} flex dir-row align-center justify-space-btwn `}>
            <div className={`${styles.optionContainer} flex dir-col align-center justify-center position-relative`}>
                {/* <div className={`${styles.eachOption} flex dir-col align-center justify-space-btwn p-lr-10 position-relative`}> */}
                    {/* <p className='text-white m-r-10'>{userName}'s workspace</p> */}
                    {userName?.map((username, index) => (
                        <div className={`${styles.eachOption} flex dir-col align-center justify-space-btwn p-lr-10 position-relative`}>
                        <div key={index} className='text-white flex dir-col m-r-10'>
                            {username.name}
                        </div>
                        </div>
                    ))}
                    <img className='cursor-pointer' src={downArrow} alt="Down Arrow Icon" onClick={handleOpenOption} />
                {/* </div> */}
                {isOpen && ( 
                    <div className={styles.dropdown}>
                        <div className={`${styles.eachOption} text-white flex align-center p-lr-10 cursor-pointer`} onClick={handleSettings} >Settings</div>
                        <div className={`${styles.eachOption} ${styles.optionLogout} text-white flex align-center p-lr-10 cursor-pointer`} onClick={handleLogout} >Log Out</div>
                    </div>
                )}
            </div>
            <div className='flex dir-row align-center'>
                <span className="text-white m-lr-10">Light</span>
                <ThemeSlider />
                <span className="text-white m-lr-10">Dark</span>
            </div>
            <div className="flex align-center">
                <button onClick={onShareButtonClick} className={`${styles.shareBtn} text-white text-16 font-wt-500 outline-none border-none bg-transparen cursor-pointer`}>Share</button>
            </div>
        </nav>
    );
};

export default DashboardNav;
