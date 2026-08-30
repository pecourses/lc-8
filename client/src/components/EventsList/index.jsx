import EventItem from './EventItem';

function EventsList({ events }) {
  if (!events.length) {
    return <p>No events found.</p>;
  }

  return (
    <ul>
      {events.map((event) => (
        <EventItem key={event._id} event={event} />
      ))}
    </ul>
  );
}

export default EventsList;
