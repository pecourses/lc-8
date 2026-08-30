import styles from './EventItem.module.css';

export default function EventItem({ event }) {
  const eventDate = new Date(event.date);

  return (
    <li className={styles.card}>
      <h2 className={styles.title}>{event.title}</h2>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <span className={styles.category}>{event.category}</span>
        </div>
        <div className={styles.metaItem}>
          <time dateTime={event.date}>{eventDate.toLocaleString()}</time>
        </div>
      </div>

      {event.location && (
        <div className={styles.meta}>
          <span>📍 {event.location}</span>
        </div>
      )}

      <p className={styles.description}>{event.description}</p>
    </li>
  );
}
