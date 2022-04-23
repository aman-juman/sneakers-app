import React, {useState} from 'react';
import basketImg from "../../assets/images/icon-cart.svg";
import avatarImg from "../../assets/images/image-avatar.png";
import styles from "./Header.module.scss";
import Cart from "../cart/Cart";
import menuPrimary from "../../assets/images/icon-menu.svg";
import menuSecondary from "../../assets/images/icon-close.svg";
import cn from "classnames";
import {useSelector} from "react-redux";


function Header() {
    const [cartShow, setCartShow] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const cart = useSelector(state => state.cart);


    return (
        <header className="container">
            <div className={styles.wrap}>
                <div
                    onClick={() => setMenuOpen(false)}
                    className={cn(styles.menuBackgroundWrap, {
                    [styles.menuOpen] : menuOpen
                })}>
                    <div className={styles.menuBackground}>
                        <ul className={styles.navListsOpenMenu}>
                            <li className={styles.navItem}>Collections</li>
                            <li className={styles.navItem}>Men</li>
                            <li className={styles.navItem}>Women</li>
                            <li className={styles.navItem}>About</li>
                            <li className={styles.navItem}>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.leftBlock}>
                    <img
                        onClick={()=> setMenuOpen(prev => !prev)}
                        className={styles.menu}
                        src={menuOpen ?menuSecondary :menuPrimary}
                        alt="menu"/>
                    <h1 className={styles.logo}>sneakers</h1>
                    <nav className={styles.nav}>
                        <ul className={styles.navLists}>
                            <li className={styles.navItem}>Collections</li>
                            <li className={styles.navItem}>Men</li>
                            <li className={styles.navItem}>Women</li>
                            <li className={styles.navItem}>About</li>
                            <li className={styles.navItem}>Contact</li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.rightBlock}>
                    <div className={styles.basketWrap} onClick={() => setCartShow(prev => !prev)} >
                        {cartShow &&    <Cart products={cart.products}/>}
                        <img className={styles.basketImg} src={basketImg} alt="basket"/>
                        <span className={styles.basketQuantity}>{cart.totalQuantity}</span>
                    </div>
                    <img className={styles.avatarImg} src={avatarImg} alt="avatar"/>
                </div>
            </div>
        </header>
    );
}

export default Header;