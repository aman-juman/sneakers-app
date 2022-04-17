import React from 'react';
import styles from './CartItem.module.scss'
import deleteIcon from "../../assets/images/icon-delete.svg";

function CartItem({productImg, title, price, quantity, totalPrice, onDelete}) {
    return (
        <div className={styles.wrap}>
            <img className={styles.productImg} src={productImg} alt="logo product"/>
            <div className={styles.content}>
                <h4 className={styles.title}>
                    {title}
                </h4>
                <div className={styles.description}>
                    <span className={styles.price}>{`$${price} x ${quantity}`}</span>
                    <h4 className={styles.totalPrice}>{`$${totalPrice}`}</h4>
                </div>
            </div>
            {/*<div className={styles.deleteWrap}>*/}
                <img onClick={() => onDelete()} className={styles.delete} src={deleteIcon} alt="delete product"/>
            {/*</div>*/}
        </div>
    );
}

export default CartItem;