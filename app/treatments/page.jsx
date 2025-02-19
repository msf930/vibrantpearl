"use client";

import React, {useState} from 'react';
import styles from "./styles.module.css";
import Nav from "@/app/components/Nav/Nav";
import {AnimatePresence, motion} from "motion/react";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import Footer from "@/app/components/Footer/Footer";
import HeroSmall from "@/app/components/HeroSmall/HeroSmall";

import Image from "next/image";

import data from "@/app/utils/data.json";

export default function Treatments() {
    const treatData = data.treatments;
    const [selectedTreat, setSelectedTreat] = useState("Acupuncture");
    const [isVisible, setIsVisible] = useState(true);

    const selectedData = treatData.filter(treat => treat.name === selectedTreat)[0];
    const fader = (treat) => {
        setIsVisible(false);
        setSelectedTreat(treat);
        setTimeout(() => {
            setIsVisible(true);
        }, 1000);
    }

    const contentFormatter = (type, content) => {
        if (type === "ul") {
            return (
                <ul className={styles.treatUl}>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        }
        if (type === "ol") {
            return (
                <ol className={styles.treatOl}>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            );
        }
        if (type === "p") {
            return (
                <p className={styles.treatP}>{content}</p>
            );
        }
        if (type === "header") {
            return (
                <h2 className={styles.treatH2}>{content}</h2>
            );
        }
        if (type === "subHeader") {
            return (
                <h3 className={styles.treatH3}>{content}</h3>
            );
        }
        if (type === "Image") {
            return (
                <div className={styles.treatImageCont}>
                    <Image src={content} alt="treatment" fill objectFit="contain"/>
                </div>
            );
        }
        if (type === "ImageVertical") {
            return (
                <div className={styles.treatImageVerticalCont}>
                    <Image src={content} alt="treatment" fill objectFit="contain"/>
                </div>
            );
        }
        if (type === "iconLg") {
            return (
                <div className={styles.treatIconLgCont}>
                    <div className={styles.treatIconLgImageCont}>
                        <Image src={content[0]} alt="treatment" width={60} height={60}/>
                    </div>
                    <div className={styles.treatIconLgTextCont}>
                        <h4>{content[1]}</h4>
                        <p>{content[2]}</p>
                    </div>
                </div>
            );
        }
        if (type === "iconSm") {
            return (
                <div className={styles.treatIconSmCont}>
                    <div className={styles.treatIconLgCont}>
                        <div className={styles.treatIconLgImageCont}>
                            <Image src={content[0]} alt="treatment" width={60} height={60}/>
                        </div>
                        <div className={styles.treatIconLgTextCont}>
                            <h4>{content[1]}</h4>
                            <p>{content[2]}</p>
                        </div>
                    </div>
                    <div className={styles.treatIconLgCont}>
                        <div className={styles.treatIconLgImageCont}>
                            <Image src={content[3]} alt="treatment" width={60} height={60}/>
                        </div>
                        <div className={styles.treatIconLgTextCont}>
                            <h4>{content[4]}</h4>
                            <p>{content[5]}</p>
                        </div>
                    </div>
                </div>
            );
        }
    };
    return (
        <AnimatePresence >
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeIn", duration: 1.0}}
                exit={{opacity: 0, transition: {duration: 0.8}}}
                className={styles.page}
            >
                <div className={styles.navCont}>
                    <Nav/>
                </div>
                <HeroSmall type="treatments"/>
                <div className={styles.treatCont}>
                    <div className={styles.aside}>
                        <h1>Our Treatments</h1>
                        <h2>Click below to learn more</h2>
                        <hr />
                        <div className={styles.treatBtnCont}>
                        {treatData.map((treat, index) => (
                            <button
                                {...(selectedTreat === treat.name ? {className: styles.treatBtnSelected} : {className: styles.treatBtn})}
                                onClick={() => {
                                    // setSelectedTreat(treat.name);
                                    fader(treat.name);
                                }}
                                key={index}>
                                {treat.name}
                            </button>
                        ))
                        }
                        </div>
                    </div>
                    <div className={styles.treatBg}>
                        <AnimatePresence initial={false}>
                            {isVisible ?
                            <motion.div className={styles.treatContent}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{ease: "easeIn", duration: 1.0}}
                                        exit={{opacity: 0, transition: {duration: 0.8}}}
                            >
                                <h1 className={styles.treatTitle}>{selectedData.title}</h1>
                                    {selectedData.content.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className={styles.treatItemCont}
                                            initial={{opacity: 0, y: 20}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{ease: "easeOut", duration: 1.0, delay: 0.3 * index}}
                                        >
                                            {contentFormatter(item.type, item.body)}
                                        </motion.div>
                                    ))}
                                <a className={styles.bookNowBtn} href="/schedule">Book Now</a>
                            </motion.div>
                                : null}
                        </AnimatePresence>
                    </div>
                </div>
                <div className={styles.formCont}>
                    <ContactForm/>
                </div>
                <Footer/>
            </motion.div>
        </AnimatePresence>
    );
}