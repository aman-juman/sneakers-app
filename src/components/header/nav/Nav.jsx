import React from 'react';
import styles from "./Nav.module.scss";

function Nav(props) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navLists}>
                <li className={styles.navItem}>Collections</li>
                <li className={styles.navItem}>Men</li>
                <li className={styles.navItem}>Women</li>
                <li className={styles.navItem}>About</li>
                <li className={styles.navItem}>Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;