import styles from "./TariffCard.module.css"

export default function TariffCard(props) {
    let className = `${styles.tariffCard} ${props.addClass} ${props.selected ? "selected" : ""}`;
    return (
        <div className={className}>
            <div className="title">
                {props.title}
            </div>
            <div className="price">
                руб {props.price}/мес
            </div>
            <div className="speed">
                до {props.speed} Мб/сек
            </div>
            <div className="info">
                {props.info}
            </div>
        </div>
    );
}