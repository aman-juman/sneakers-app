import React from 'react';
import styles from "./Content.module.scss";
import Description from "./description/Description";
import SliderContainer from "./slider/SliderContainer";

function Content({setMode}) {

    return (
        <div className="container">
            <div className={styles.wrap}>
                <div className={styles.sliderSize}>
                    <SliderContainer setMode={setMode} />
                </div>
                <Description />
            </div>
        </div>
    );
}

export default Content;