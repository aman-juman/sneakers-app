import React from 'react';
import styles from "./ModalMode.module.scss";
import closeImg from "../../assets/images/icon-close.svg";
import prevImg from "../../assets/images/icon-previous.svg";
import nextImg from "../../assets/images/icon-next.svg";
import SliderContainer from "./slider/SliderContainer";


function ModalMode({setMode}) {

    return (
        <div
            onClick={() => setMode(false)}
            className={styles.wrapp}>
            <div className={styles.content}>
                <img onClick={() => setMode(false)} className={styles.closeImg} alt="" src={closeImg}/>
                <div className={styles.prevImg}><img alt="" src={prevImg}/></div>
                <div className={styles.nextImg}><img alt="" src={nextImg} /></div>
                <SliderContainer/>
            </div>
        </div>
    );
}

export default ModalMode;