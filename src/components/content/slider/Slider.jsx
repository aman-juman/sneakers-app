import React from 'react';
import styles from "./Slider.module.scss";
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setIndexImage} from "../../../features/productImageCurrent";


function Slider({bigImages, smallImages, setMode}) {
    const {index} = useSelector(state=> state.imageIndex);
    const dispatch = useDispatch();
    return (
        <div
            onClick={e => e.stopPropagation()}
            className={styles.wrap}>
            <div className={styles.bigImg}>
                <img
                    onClick={() => setMode(true)}
                    className={styles.bigImg}
                    src={bigImages[index]}
                    alt="Product"/>
            </div>
            <div className={styles.collectionImg}>
                {smallImages.map((img, i) => (
                    <div key={i} onClick={() => dispatch(setIndexImage(i))} className={styles.smallImgWrap}>
                        <img
                            className={cn(styles.smallImg, {
                                [styles.active]: index === i
                            })}
                            src={img}
                            alt="Product"
                            onClick={() => dispatch(setIndexImage(i))}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Slider;