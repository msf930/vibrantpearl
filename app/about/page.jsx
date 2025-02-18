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
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ease: "easeIn", duration: 1.0, delay: 0.5}}
                        >
                           <div dangerouslySetInnerHTML={{__html: aboutData.section2}}></div>
                        </motion.div>
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
                        >Acupuncturist and Practitioner of Traditional Chinese Medicine</motion.h2>
                         </div>
                </div>
                <div className={styles.aboutTwoCont}>
                    <div className={styles.aboutTwoLeft}>
                        <div className={styles.headshotCont}>
                            <Image src={flower} alt="flower" fill objectFit="contain"/>
                        </div>
                    </div>
                    <div className={styles.aboutTwoRight}>
                        <div dangerouslySetInnerHTML={{__html: aboutData.section3}}></div><br/><br/><p>{aboutData.section4}</p>
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