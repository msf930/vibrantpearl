"use client"

import styles from "./styles.module.css";

import { motion, AnimatePresence } from "motion/react";

import Footer from "@/app/components/Footer/Footer";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import Nav from "@/app/components/Nav/Nav";
import HeroSmall from "@/app/components/HeroSmall/HeroSmall"
import Image from "next/image";

export default function Schedule() {
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
                <HeroSmall type="schedule"/>
                <div className={styles.careCont}>
                    <motion.div className={styles.careImageCont}
                                initial={{opacity: 0, x: 100}}
                                animate={{opacity: 1, x: 0}}
                                transition={{ duration: 1.5, delay: 0.5 }}
                    >
                        <Image src="/Logo.png" alt="studio" fill objectFit="contain"/>
                    </motion.div>
                </div>
                <div className={styles.scheduleCont}>
                    <iframe src="https://app.squarespacescheduling.com/schedule/43adfe32"
                            title="Schedule Appointment"
                            // width="100%"
                            // height="100%"
                            style={{ overflow: "hidden" }}
                    ></iframe>
                </div>
                <div className={styles.formCont}>
                    <ContactForm/>
                </div>
                <Footer/>
            </motion.div>
        </AnimatePresence>
    );
}