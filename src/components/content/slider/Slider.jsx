import React, {useState} from 'react';
import styles from "./Slider.module.scss";
import imgProductBig1 from '../../../assets/images/image-product-1.jpg';
import imgProductBig2 from '../../../assets/images/image-product-2.jpg';
import imgProductBig3 from '../../../assets/images/image-product-3.jpg';
import imgProductBig4 from '../../../assets/images/image-product-4.jpg';


import imgProductSmall1 from '../../../assets/images/image-product-1-thumbnail.jpg';
import imgProductSmall2 from '../../../assets/images/image-product-2-thumbnail.jpg';
import imgProductSmall3 from '../../../assets/images/image-product-3-thumbnail.jpg';
import imgProductSmall4 from '../../../assets/images/image-product-4-thumbnail.jpg';

const bigImages = [imgProductBig1, imgProductBig2, imgProductBig3, imgProductBig4];
const smallImages = [imgProductSmall1, imgProductSmall2, imgProductSmall3, imgProductSmall4];



function Slider(props) {
    const [currentBigImg, setCurrentBigImg] = useState(bigImages[0]);
    const [currentSmallImg, setCurrentSmallImg] = useState(smallImages[0]);

    return (
        <div className={styles.wrap}>
            <div className={styles.bigImg}>
                <img
                    className={styles.bigImg}
                    src={currentBigImg}
                    alt="Product Image"/>
            </div>
            <div className={styles.collectionImg}>
                {smallImages.map((img, i) =>(
                    <div className={styles.smallImgWrap}>
                        <img className={styles.smallImg} src={img} alt="Product Image"/>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Slider;