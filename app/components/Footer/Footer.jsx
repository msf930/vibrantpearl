
import styles from './Footer.module.css';
import { AiFillFacebook, AiOutlineX, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import {IconContext} from "react-icons";
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <div className={styles.footerCont}>
            <div>
                <a href="/studio">© {currentYear} Vibrant pearl</a>
            </div>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
                <div className={styles.iconGroupContact}>
                    {/*<Link className={styles.icon} href={"https://twitter.com"}><AiOutlineX /></Link>*/}
                    <Link className={styles.icon} href={"https://www.facebook.com/share/155xh8D4tU/?mibextid=wwXIfr"} target="_blank"><AiFillFacebook /></Link>
                    {/*<Link className={styles.icon} href={"https://www.instagram.com"}><AiFillInstagram /></Link>*/}
                </div>
            </IconContext.Provider>
        </div>
    );
}