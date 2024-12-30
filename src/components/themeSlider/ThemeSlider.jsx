import React from 'react';
import styles from "./themeSlider.module.css";

const ThemeSlider = () => {
  return (
    <div className={''}>
      <label className={styles.themeSlider}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ThemeSlider;
