import React from 'react';
import styles from "./Description.module.scss";
// import cartIcon from "icon-cart.svg";

function Description(props) {
    return (
        <div className={styles.wrap}>
            <h3 className={styles.companyName}>Sneaker Company</h3>
            <h2 className={styles.title}>Fall Limited Edition Sneakers</h2>
            <p className={styles.desc}>These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className={styles.priceBlock}>
                <div className={styles.mainPriceSection}>
                    <h3 className={styles.currentPrice}>
                        $125.00
                    </h3>
                    <span className={styles.discount}>
                    50%
                    </span>
                </div>
                <p className={styles.oldPrice}>$250.00</p>
            </div>
            <div className={styles.btnWrap}>
                <div className={styles.quantityWrap}>
                    <button className={styles.incrementBtn}>-</button>
                    <div className={styles.quantity}>0</div>
                    <button className={styles.decrementBtn}>+</button>
                </div>

                <button className={styles.addBtn}>
                    {/*<img src={cartIcon} alt="cart icon"/>*/}
                    Add to cart
                </button>

            </div>
        </div>
    );
}

export default Description;