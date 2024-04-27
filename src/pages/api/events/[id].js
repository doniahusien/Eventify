// pages/api/events/[id].js

// Import your database connection
import db from '../../../utils/db.js';

export default function handler(req, res) {
  const eventId = req.query.id; // Retrieve the event ID from the URL query parameters

  const query = `
    SELECT 
      event.*,
      organizer.name AS organizer_name,
      organizer.email AS organizer_email,
      organizer.image AS organizer_image,
      attende.name AS attende_name,
      attende.email AS attende_email,
      attende.image AS attende_image,
      speaker.name AS speaker_name,
      speaker.email AS speaker_email,
      speaker.image AS speaker_image,
      sponsor.name AS sponsor_name,
      sponsor.email AS sponsor_email,
      sponsor.image AS sponsor_image
    FROM event
    JOIN organizer ON event.organizer_id = organizer.organizer_id
    LEFT JOIN booking ON event.event_id = booking.event_id
    LEFT JOIN attende ON booking.attende_id = attende.attende_id
    LEFT JOIN event_feedback ON event.event_id = event_feedback.event_id
    LEFT JOIN speakersofevent ON event.event_id = speakersofevent.event_id
    LEFT JOIN speaker ON speakersofevent.speaker_id = speaker.speaker_id
    LEFT JOIN sponsor ON sponsor.event_id = event.event_id
    LEFT JOIN sponsorship ON sponsor.sponsor_id = sponsorship.sponsor_id
    LEFT JOIN type AS event_type ON event_type.type_id = organizer.type_id
    LEFT JOIN type AS organizer_type ON organizer_type.type_id = organizer.type_id
    LEFT JOIN type AS speaker_type ON speaker_type.type_id = speaker.type_id
    LEFT JOIN type AS sponsor_type ON sponsor_type.type_id = sponsor.type_id
    WHERE event.event_id = ?;
  `;

  // Execute the query with the event ID
  db.query(query, eventId, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }

    res.status(200).json({ message: 'Retrieved event details', event: results[0] });
  });
}
