
import styles from "./HeroSmall.module.css";
import data from "@/app/utils/data.json";

import Image from "next/image";

export default function HeroSmall({type}){
    const pageData = data.heroSmall.find(page => page.type === type);
    return(
        <div className={styles.heroCont}>
            <Image src={pageData.image} alt={pageData.title} objectFit="cover" fill/>
            <div className={styles.overlay}>
                <div className={styles.overlayCont}>
                    <h1>{pageData.title}</h1>
                    <h2>{pageData.subtitle}</h2>
                    {type === "schedule"
                        ? <h2>719-588-7280</h2>
                        : <a href="/schedule" className={styles.heroSmButton}>Book Now</a>
                    }
                </div>
            </div>
        </div>
    );
}