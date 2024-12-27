import React from 'react';
import styles from "./themeSlider.module.css";

const ThemeSlider = () => {
  return (
    <div className={styles.themeSliderContainer}>
      <label className={styles.themeSlider}>
        <span className={styles.lightLabel}>Light</span>
        <input type="checkbox" />
        <span className={styles.slider}></span>
        <span className={styles.darkLabel}>Dark</span>
      </label>
    </div>
  );
};

export default ThemeSlider;
