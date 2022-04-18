import React from 'react';
import styles from "./Slider.module.scss";
import cn from "classnames";


function Slider(props) {
    const {onChangeImage, currentBigImg, currentSmallImg, setCurrentBigImg, setCurrentSmallImg, setMode, smallImages} = props.props;


    return (
        <div
            onClick={e => e.stopPropagation()}
            className={styles.wrap}>
            <div className={styles.bigImg}>
                <img
                    onClick={() => setMode(true)}
                    className={styles.bigImg}
                    src={currentBigImg}
                    alt="Product"/>
            </div>
            <div className={styles.collectionImg}>
                {smallImages.map((img, i) => (
                    <div key={i} onClick={(e) => onChangeImage(e, i)} className={styles.smallImgWrap}>
                        <img
                            className={cn(styles.smallImg, {
                                [styles.active]: currentSmallImg === i
                            })}
                            src={img}
                            alt="Product"
                            onClick={() => setCurrentSmallImg(i)}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Slider;