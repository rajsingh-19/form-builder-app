import React from "react";
import styles from "./landingPage.module.css";
import {useNavigate} from "react-router-dom";
import formbot from "../../assets/formbot.svg";
import heading from "../../assets/heading.svg";
import vector from "../../assets/vector.svg";
import clippathgroup from "../../assets/clippathgroup.svg";
import containerImg from "../../assets/containerImg.svg";
import footerArrow from "../../assets/arrow.svg";

const LandingPage = () => {
    // Initialize the useNavigate hook to programmatically navigate between routes
    const navigate = useNavigate();             
    //      function for go to sign in page 
    const handleSignIn = () => {
        navigate('/login');
    };
    
    return (
        <div className={styles.landingPageContainer}>        
            <nav className={`${styles.landingNav} flex dir-row align-center justify-space-btwn m-b-120`}>
                <div className="flex dir-row align-center">
                    <img className={`${styles.formBotIcon} m-r-10`} src={formbot} alt="form bot icon" />
                    <span className={`text-white ${styles.lineHeight20} font-outfit font-wt-700 text-18`}>FormBot</span>
                </div>
                <div className="flex dir-row">
                    <button className={`${styles.signinBtn} bg-transparent text-white font-wt-700 font-open-sans text-16 outline-none border-none cursor-pointer m-r-10`} onClick={handleSignIn}>Sign in</button>
                    <button className={`${styles.createFormBotBtn} text-white font-wt-700 font-open-sans text-16 outline-none border-none cursor-pointer`} onClick={handleSignIn}>Create a FormBot</button>
                </div>
            </nav>
            <main className="position-relative">
                {/*             main 1 section       */}
                <div className="heading position-relative flex dir-row justify-center align-center">
                    <div className={`${styles.svgContainer1} position-absolute`}>
                        <img src={vector} alt="triangle svg" />
                    </div>
                    <div className="headingImg">
                        <div className={`${styles.headingImgContainer} m-b-15`}>
                            <img src={heading} alt="heading paragraph image" />
                        </div>
                        <div className={`${styles.headingImgDesc} text-center m-b-15`}>
                            <p className="font-wt-400 font-open-sans text-18">Typebot gives you powerful blocks to create unique chat experiences. Embed them</p>
                            <p className="font-wt-400 font-open-sans text-18">anywhere on your web/mobile apps and start collecting results like magic.</p>
                        </div>
                        <div className="text-center m-b-15">
                            <button className={`${styles.freeformbotBtn} text-white font-wt-600 font-open-sans outline-none border-none`}>Create a FormBot  for free</button>
                        </div>
                    </div>
                    <div className={`${styles.svgContainer2} position-absolute`}>
                        <img src={clippathgroup} alt="semi circle svg" />
                    </div>
                </div>
                {/*             main 2 section       */}
                <div className="flex dir-row justify-center align-center">
                    <div className={styles.containerImgContainer}>
                        <img src={containerImg} alt="main page container image" />
                    </div>
                </div>
            </main>
            {/*                 footer               */}
            <footer className="flex justify-center m-t-100">
                <div className={`${styles.footerContainer} flex dir-row justify-space-btwn m-b-15`}>
                <div>
                    <ul className="list-style-none">
                        <li className="font-outfit font-wt-700 text-white m-b-10 flex dir-row align-center">
                            <img className={styles.footerFormBotIcon} src={formbot} alt="form bot icon" />
                            <span>FormBot</span>
                        </li>
                        <li className="font-open-sans text-14 font-wt-400 text-white m-b-3">Made with ❤️ by</li>
                        <li className="text-underline font-open-sans text-14 font-wt-400 text-white m-b-3">@cuvette</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-style-none">
                        <li className="font-outfit font-wt-500 text-white m-b-5">Product</li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">Status&nbsp;<img src={footerArrow} alt="footer arrow" /></li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">Documentation&nbsp;<img src={footerArrow} alt="footer arrow" /></li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">Roadmap&nbsp;<img src={footerArrow} alt="footer arrow" /></li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">Pricing&nbsp;<img src={footerArrow} alt="footer arrow" /></li>
                    </ul>
                </div>
                <div>
                    <ul className="list-style-none">
                        <li className="font-outfit font-wt-500 text-white m-b-5">Community</li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">Discord&nbsp;<img src={footerArrow} alt="footer arrow" /></li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">GitHub repository&nbsp;<img src={footerArrow} alt="footer arrow" /></li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">Twitter&nbsp;<img src={footerArrow} alt="footer arrow" /></li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">LinkedIn&nbsp;<img src={footerArrow} alt="footer arrow" /></li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">OSS Friends&nbsp;<img src={footerArrow} alt="footer arrow" /></li>
                    </ul>
                </div>
                <div>
                    <ul className="list-style-none">
                        <li className="font-outfit font-wt-500 text-white m-b-5">Company</li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">About</li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">Contact</li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">Terms of Service</li>
                        <li className="font-open-sans text-14 font-wt-400 text-white text-underline m-b-3">Privacy Policy</li>
                    </ul>
                </div>
                </div>
            </footer>
        </div>
    )
};

export default LandingPage;
