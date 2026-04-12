import styles from "./NavBar.module.css"
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";


interface NavBarProps {
    bannerText: string;
    logo: string;
    items: Array<string>;
}

const NavBar = ({ bannerText, logo, items }: NavBarProps) => {
    const [showMenu,setShowMenu]=useState<boolean>(false)
    return (
        <>
        <div className={styles.navGroup}>
            <div className={styles.banner}>
                <p>{bannerText}</p>
                <FaArrowRight />
            </div>
            <nav className={styles.navBar}>
                <div className={styles.logo}>
                    <img src={logo} className={styles.logoImg} alt="logo" />
                </div>
                <ul className={styles.navList}>
                    {items.map((item, index) => {
                        return (
                            <li key={index} className={styles.item}>{item}</li>
                        )
                    })}
                </ul>
                <button className={styles.bars} onClick={()=>setShowMenu(!showMenu)}><HiBars3BottomRight /></button>
            </nav>
        </div>
                    <ul className={`${styles.navMenu} ${showMenu ? styles.showMenu : ""}`}>
                {items?.map((item, index) => {
                    return (
                        <li key={index} className={styles.item}>{item}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default NavBar