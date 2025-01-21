
import styles from "./Symbol.module.css";

import data from "@/app/utils/data.json";

const Symbol = ({ type }) => {

    const symbol = data.symbols.find(symbol => symbol.name === type)
    return(
        <div className={styles.symbolCont}>
            <div className={styles.symbolImg}>
                <img src={`/${symbol.image}`} alt={symbol.text}/>
            </div>
            <h1 className={styles.symbolText}>{symbol.text}</h1>
        </div>
    )
}

export default Symbol;