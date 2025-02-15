
import styles from "./Symbol.module.css";

import data from "@/app/utils/data.json";
import {useRef} from "react";

const Symbol = ({ type }) => {

    const symbol = data.symbols.find(symbol => symbol.name === type)
    const boundingRef = useRef(null);
    return(
        <div className={styles.perspectiveCont}>
            <div
                onMouseLeave={() => { boundingRef.current = null; }}
                onMouseEnter={(ev) => {
                    boundingRef.current = ev.target.getBoundingClientRect();
                }}
                onMouseMove={(ev) => {
                if(!boundingRef.current) return;
                const x = ev.clientX - boundingRef.current.left;
                const y = ev.clientY - boundingRef.current.top;
                    const xPercentage = x / boundingRef.current.width;
                    const yPercentage = y / boundingRef.current.height;
                    const xRotation = (xPercentage - 0.5) * 20;
                    const yRotation = (0.5 - yPercentage) * 20;

                    ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
                    ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
                    ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
                    ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
                }}
                className="transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]">
                <div className={styles.symbolCont}>
                    <div className={styles.symbolImg}>
                        <img src={`/${symbol.image}`} alt={symbol.text} draggable={false}/>
                    </div>
                    <h1 className={styles.symbolText}>{symbol.text}</h1>
                </div>
            </div>
        </div>
    )
}

export default Symbol;