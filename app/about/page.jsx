"use client"

import Image from "next/image";

import { motion, AnimatePresence } from "motion/react";

import styles from "./styles.module.css";
import data from '@/app/utils/data.json'

import billy from "@/public/BillyHeadshotNew.jpg";
import flower from "@/public/aboutImageFlower.png";

import Nav from "@/app/components/Nav/Nav";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import Footer from "@/app/components/Footer/Footer";



export default function About() {
    const aboutData =  data.about;
    return (
        <AnimatePresence>
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
                <div className={styles.aboutHeadSpacer}></div>
                <div className={styles.aboutOneCont}>
                    <div className={styles.aboutOneLeft}>
                        <motion.h1
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeIn", duration: 1.0}}
                        >
                            Our Practitioner
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeIn", duration: 1.0}}
                        >
                            {aboutData.section1}
                        </motion.p>
                        <motion.p
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeIn", duration: 1.0, delay: 0.5}}
                        >
                            {aboutData.section2}
                        </motion.p>
                    </div>
                    <div className={styles.aboutOneRight}>
                        <motion.div
                            className={styles.headshotCont}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeIn", duration: 1.0, delay: 0.5}}
                        >
                            <Image src={billy} alt="billy headshot" fill objectFit="contain"/>
                        </motion.div>
                        <motion.h2
                            className={styles.infoTitle}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeIn", duration: 1.0}}
                        >Billy Che Quintana L.Ac., Dipl. O.M.</motion.h2>
                        <motion.p
                            className={styles.infoBody}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeIn", duration: 1.0}}
                        >Acupuncturist, Cosmetic Acupuncturist, Chinese Herbalist, and Practitioner of Traditional Chinese Wellness</motion.p>
                    </div>
                </div>
                <div className={styles.aboutTwoCont}>
                    <div className={styles.aboutTwoLeft}>
                        <div className={styles.headshotCont}>
                            <Image src={flower} alt="flower" fill objectFit="contain"/>
                        </div>
                    </div>
                    <div className={styles.aboutTwoRight}>
                        <p>{aboutData.section3}<br/><br/>{aboutData.section4}</p>
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