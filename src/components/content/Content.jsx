import React from 'react';
import styles from "./Content.module.scss";
import Slider from "./slider/Slider";
import Description from "./description/Description";

function Content(props) {
    return (
        <div className="container">
            <div className={styles.wrap}>
                <Slider />
                <Description />
            </div>
        </div>
    );
}

export default Content;