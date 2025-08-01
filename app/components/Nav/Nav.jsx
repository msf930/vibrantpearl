"use client"

import styles from "./Nav.module.css";

import Logo from "@/public/VPLogoEdit.png";

import Link from "next/link";
import Image from "next/image";

import {motion, useMotionValueEvent, useScroll} from "motion/react";

import React, {useState} from "react";

import { usePathname  } from "next/navigation";

export default function Nav() {
    //handle scroll animation
    const { scrollY } = useScroll()

    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious()

        if (current > previous && current > 150) {
            setHidden(true)
            setShowNavbar(false);
            setNavIcon(`${styles.navIconClosed}`);
        } else {
            setHidden(false)
            setShowNavbar(false);
            setNavIcon(`${styles.navIconClosed}`);
        }


    })

    //handle opening and closing of mobile nav
    const [navIcon, setNavIcon] = useState(`${styles.navIconClosed}`);
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
        if (showNavbar) {
            return setNavIcon(`${styles.navIconClosed}`);
        } else {
            return setNavIcon(`${styles.navIconOpen}`);
        }
    };

    const pathname = usePathname();


    return (
        <motion.header
            animate={hidden ? "hide" : "show"}
            variants={{
                show: {y: 0, opacity: 1},
                hide: {y: "-100%", opacity: 0}
            }}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className={styles.nav}
        >
            <nav className={styles.navCont}>
                <div className={styles.navImgCont}>
                    <Link href="/">

                        <Image src={Logo} alt="logo" height={79} width={250}/>

                    </Link>
                </div>
                <div className={styles.navLinkCont}>
                    <div>
                        <Link
                            className={pathname === "/" ? styles.navBarLinkActive : styles.navBarLink}
                            href="/">
                                Home
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={pathname === "/schedule" ? styles.navBarLinkActive : styles.navBarLink}
                            href="/schedule">
                            Scheduling
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={pathname === "/about" ? styles.navBarLinkActive : styles.navBarLink}
                            href="/about">
                                About
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={pathname === "/blog" ? styles.navBarLinkActive : styles.navBarLink}
                            href="/blog">
                            Blog
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={pathname === "/treatments" ? styles.navBarLinkActive : styles.navBarLink}
                            href="/treatments">
                                Treatments
                        </Link>
                    </div>



                </div>
            </nav>
            <div className={styles.navContMobile}>
                <div className={styles.headerCont}>
                    <div className={styles.navLogoMobile}>
                        <Link href="/">
                            <Image src="/Logo.png" alt="logo" height={60} width={100}/>
                        </Link>
                    </div>
                    <div>
                        <button className={navIcon} onClick={handleShowNavbar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div
                    className={
                        showNavbar ? styles.navelementsactive : styles.navelements
                    }

                >
                    <nav>
                        <ul>
                            <li>
                                <Link
                                    href="/"
                                    className={pathname === "/" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className={pathname === "/about" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/schedule"
                                    className={pathname === "/schedule" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    Scheduling
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className={pathname === "/blog" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/treatments"
                                    className={pathname === "/treatments" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    Treatments
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </motion.header>
    );
}