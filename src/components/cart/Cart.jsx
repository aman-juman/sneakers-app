import React from 'react';
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";
import productImg from "../../assets/images/image-product-1-thumbnail.jpg";

function Cart(props) {


    return (
        <div className={styles.wrap}>
            <div className={styles.cart}>
                <h3 className={styles.title}>Cart</h3>
                <CartItem
                    productImg={productImg}
                    title={"Fall Limited Edition Sneakers"}
                    price={125}
                    quantity={3}
                    totalPrice={375}
                    // onDelete={}
                />
                <button className={styles.btn}>Checkout</button>
            </div>
        </div>
    );
}

export default Cart;