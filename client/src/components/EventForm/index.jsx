import { useState } from 'react';
import { http } from '../../api';
import styles from './EventForm.module.css';

const initialFormValues = {
  title: '',
  description: '',
  category: 'meeting',
  date: '',
  location: '',
};

function EventForm({ onEventCreated }) {
  const [formValues, setFormValues] = useState(initialFormValues);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { data: newEvent } = await http.createEvent(formValues);

      onEventCreated(newEvent);

      setFormValues(initialFormValues);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="title">
          Title
        </label>
        <input
          id="title"
          className={styles.input}
          name="title"
          value={formValues.title}
          onChange={handleChange}
          placeholder="Event title"
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className={styles.textarea}
          name="description"
          value={formValues.description}
          onChange={handleChange}
          placeholder="Event description"
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="category">
          Category
        </label>
        <select
          id="category"
          className={styles.select}
          name="category"
          value={formValues.category}
          onChange={handleChange}
        >
          <option value="meeting">Meeting</option>
          <option value="training">Training</option>
          <option value="corporate">Corporate</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="date">
          Date & Time
        </label>
        <input
          id="date"
          className={styles.input}
          type="datetime-local"
          name="date"
          value={formValues.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="location">
          Location
        </label>
        <input
          id="location"
          className={styles.input}
          name="location"
          value={formValues.location}
          onChange={handleChange}
          placeholder="Event location"
          required
        />
      </div>

      <button className={styles.submit} type="submit">
        Create event
      </button>
    </form>
  );
}

export default EventForm;
