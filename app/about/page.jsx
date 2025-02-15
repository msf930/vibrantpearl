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
                        <h1>Our Practitioner</h1>
                        <p>{aboutData.section1}<br/><br/>{aboutData.section2}</p>
                    </div>
                    <div className={styles.aboutOneRight}>
                        <div className={styles.headshotCont}>
                            <Image src={billy} alt="billy headshot" fill objectFit="contain"/>
                        </div>
                        <h2 className={styles.infoTitle}>Billy Che Quintana L.Ac., Dipl. O.M.</h2>
                        <p className={styles.infoBody}>Acupuncturist, Cosmetic Acupuncturist, Chinese Herbalist, and Practitioner of Traditional Chinese Wellness</p>
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