import React from 'react';
import styles from "./ModalMode.module.scss";
import closeImg from "../../assets/images/icon-close.svg";
import prevImg from "../../assets/images/icon-previous.svg";
import nextImg from "../../assets/images/icon-next.svg";
import SliderContainer from "./slider/SliderContainer";
import {useDispatch, useSelector} from "react-redux";
import {bigImages} from "../data";
import {setIndexImage} from "../../features/productImageCurrent";


function ModalMode({setMode}) {
    const {index} = useSelector(state => state.imageIndex);
    const dispatch = useDispatch();

    const handleSlide = (e, direction) =>{
        e.stopPropagation()
        if(direction === 'next'){
            index < bigImages.length -1  && dispatch(setIndexImage(index + 1))
        }
        else if(direction === 'prev'){
            0 < index && dispatch(setIndexImage(index - 1))
        }
    };

    return (
        <div
            onClick={() => setMode(false)}
            className={styles.wrapp}>
            <div className={styles.content}>
                <img onClick={() => setMode(false)} className={styles.closeImg} alt="" src={closeImg}/>
                <div onClick={(e)=> handleSlide(e,"prev")} className={styles.prevImg}><img alt="" src={prevImg}/></div>
                <div onClick={(e)=> handleSlide(e,"next")} className={styles.nextImg}><img alt="" src={nextImg} /></div>
                <SliderContainer/>
            </div>
        </div>
    );
}

export default ModalMode;