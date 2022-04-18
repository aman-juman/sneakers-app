import React from 'react';
import Slider from "./slider/Slider";
import styles from "./ModalMode.module.scss";
import closeImg from "../../assets/images/icon-close.svg";
import prevImg from "../../assets/images/icon-previous.svg";
import nextImg from "../../assets/images/icon-next.svg";


function ModalMode(props) {

    const handleMode = e => {
        e.preventDefault();
        props.setMode(false)
    };

    const onChangeImg = (e, value) =>{
        e.preventDefault();


    }
    return (
        <div
            onClick={(e) => handleMode(e)}
            className={styles.wrapp}>
            <div className={styles.content}>
                <img onClick={(e) => handleMode(e)} className={styles.closeImg} alt="" src={closeImg}/>
                <div onClick={e=> onChangeImg(e, 'prev')} className={styles.prevImg}><img alt="" src={prevImg}/></div>
                <div onClick={e=> onChangeImg(e, 'next')} className={styles.nextImg}><img alt="" src={nextImg} /></div>
                <Slider  props={props}/>
            </div>
        </div>
    );
}

export default ModalMode;