import React from 'react';
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";
import productImg from "../../assets/images/image-product-1-thumbnail.jpg";
import {useDispatch} from "react-redux";
import {removeProductCart} from "../../features/cartSlice";

function Cart({products}) {
    const dispatch = useDispatch();

    return (
        <div className={styles.wrap}>
            <div className={styles.cart}>
                <h3 className={styles.title}>Cart</h3>
                {products.length === 0
                    ? <div className={styles.empty}>Your cart is empty.</div>
                    : products.map((product, i) => (
                        <div key={i}>
                            <CartItem
                                    productImg={productImg}
                                    title={product.title}
                                    price={product.price}
                                    quantity={product.quantity}
                                    totalPrice={product.price * product.quantity}
                                    onDelete={() => dispatch(removeProductCart(product))}
                            />
                        </div>
                    ))
                }
                <button className={styles.btn}>Checkout</button>
            </div>
        </div>
    );
}

export default Cart;