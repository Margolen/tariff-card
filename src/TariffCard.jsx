import styles from "./App.module.css";

export default function TariffCard(props) {
    let className = `${styles.tariffCard} ${props.addClass} ${props.selected ? "selected" : ""}`;
    return (
        <div className={className}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.price}>
                руб {props.price}/мес
            </div>
            <div className={styles.speed}>
                до {props.speed} Мб/сек
            </div>
            <div className={styles.info}>
                {props.info}
            </div>
        </div>
    );
}