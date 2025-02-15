import styles from "./Testimonials.module.css";
import {AnimatePresence, motion} from "motion/react";

import data from "@/app/utils/data.json"
import {useEffect, useState} from "react";


export default function Testimonials() {
    const testData = data.testimonials;

    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);
    const length = testData.length;

    useEffect(() => {

        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % length);
                setVisible(true);
            }, 500);
        }, 8000);
        return () => {
            clearTimeout(timer);
        };

    }, [current, length]);
    return(
        <motion.div className={styles.testimonialTextCont}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1.2, delay: 0.7}}
                    viewport={{once: true}}

        >
            <AnimatePresence>
                {visible && (
                    <div>
                        <motion.h1
                            className={styles.testimonialTitle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {testData[current].body}
                        </motion.h1>
                        <motion.h1
                        className={styles.testimonialTitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                            {testData[current].name}
                        </motion.h1>
                    </div>
                    )
                }
            </AnimatePresence>


        </motion.div>
    );
}