import styles from "./HomeEvent.module.css";

import data from "@/app/utils/data.json";

const HomeEvent = ({ id }) => {

    const event = data.homeEvents.find(event => event.id === id)
    return(
        <div className={styles.eventCont}>
            <div className={styles.eventImg}>
                <img src={`/${event.image}`} alt={event.name}/>
            </div>
            <div className={styles.eventTextCont}>
                <h1 className={styles.eventText}>{event.name}</h1>
                <h2 className={styles.eventDuration}>{event.duration}</h2>
                <button className={styles.eventButton}>Book Now</button>
            </div>
        </div>
    )
}

export default HomeEvent;