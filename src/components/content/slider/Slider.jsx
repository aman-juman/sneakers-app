import React from 'react';
import styles from "./Slider.module.scss";
import cn from "classnames";


function Slider({bigImages, smallImages, indexCurImg, setIndexCurImg, setMode}) {
    return (
        <div
            onClick={e => e.stopPropagation()}
            className={styles.wrap}>
            <div className={styles.bigImg}>
                <img
                    onClick={() => setMode(true)}
                    className={styles.bigImg}
                    src={bigImages[indexCurImg]}
                    alt="Product"/>
            </div>
            <div className={styles.collectionImg}>
                {smallImages.map((img, i) => (
                    <div key={i} onClick={() => setIndexCurImg(i)} className={styles.smallImgWrap}>
                        <img
                            className={cn(styles.smallImg, {
                                [styles.active]: indexCurImg === i
                            })}
                            src={img}
                            alt="Product"
                            onClick={() => setIndexCurImg(i)}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Slider;