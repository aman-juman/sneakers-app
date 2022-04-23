import React, {useState} from 'react';
import styles from "./Description.module.scss";
import cartIcon from "../../../assets/images/icon-cart.svg";
import {useDispatch, useSelector} from "react-redux";
import {addProductCart} from "../../../features/cartSlice";

function Description() {
    const product = useSelector(state=> state.product);
    const dispatch = useDispatch();
    const {title, description, price, discount} = product[0];
    const [quantity, setQuantity] = useState(0);


    const addToCart = () =>{
        quantity && dispatch(addProductCart({title, price, discount, quantity}))
    };
    return (
        <div className={styles.wrap}>
            <h3 className={styles.companyName}>Sneaker Company</h3>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{description}</p>
            <div className={styles.priceBlock}>
                <div className={styles.mainPriceSection}>
                    <h3 className={styles.currentPrice}>
                        ${price*discount/100}.00
                    </h3>
                    <span className={styles.discount}>
                    {discount}%
                    </span>
                </div>
                <p className={styles.oldPrice}>${price}.00</p>
            </div>
            <div className={styles.btnWrap}>
                <div className={styles.quantityWrap}>
                    <button onClick={() => quantity > 0 && setQuantity(prev => prev - 1)} className={styles.incrementBtn}>-</button>
                    <div className={styles.quantity}>{quantity}</div>
                    <button onClick={() => setQuantity(prev => prev + 1)} className={styles.decrementBtn}>+</button>
                </div>

                <button onClick={addToCart} className={styles.addBtn}>
                    <img src={cartIcon} alt="cart icon"/>
                    Add to cart
                </button>

            </div>
        </div>
    );
}

export default Description;