import React from 'react';
import styles from "./SliderControl.module.scss";
import prevImg from "../../../../assets/images/icon-previous.svg";
import nextImg from "../../../../assets/images/icon-next.svg";


function SlideControl({handleSlide}) {

    return (
        <>
            <div onClick={e=> handleSlide(e, 'prev')} className={styles.prevImg}><img alt="" src={prevImg}/></div>
            <div onClick={e=> handleSlide(e, 'next')} className={styles.nextImg}><img alt="" src={nextImg} /></div>
        </>
    );
}

export default SlideControl;