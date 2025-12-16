import styles from './card.module.css';

export default function Card({ id, title, image }) {
    return (
        <div key={id} className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <p className={styles.cardTitle}>{title}</p>
        </div>
    );
}

