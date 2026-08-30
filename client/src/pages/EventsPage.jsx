import { useEffect, useState } from 'react';
import EventForm from '../components/EventForm';
import EventsList from '../components/EventsList';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleEventCreated(newEvent) {
    setEvents((prevEvents) => [newEvent, ...prevEvents]);
  }

  return (
    <main>
      <h1>Events</h1>

      <EventForm onEventCreated={handleEventCreated} />

      {loading && <p>Loading events...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && <EventsList events={events} />}
    </main>
  );
}

export default EventsPage;
