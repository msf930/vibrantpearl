"use client"

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import styles from "./HeroParallax.module.css";
import Image from "next/image";

import heroHome from "@/public/HomeHero.jpg";

export default function HeroParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);


    return (
        <div
            ref={ref}
            className={styles.parallax}
        >
            <motion.div
                className="absolute inset-0 z-10"
                style={{
                    y: backgroundY,
                }}
            >
                <Image src={heroHome} alt="flowers" objectFit="cover" fill/>
            </motion.div>

        </div>
    );
}