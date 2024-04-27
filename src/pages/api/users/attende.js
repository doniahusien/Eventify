// Import the database connection
import db from '../../../utils/db.js';

export default function handler(req, res) {
   const query = `
    SELECT 
        a.attende_id,
        a.name AS attendee_name,
        a.email AS attendee_email,
        a.image AS attendee_image,
        e.event_id,
        e.name AS event_name,
        e.location AS event_location,
        e.date AS event_date,
        e.description AS event_description,
        o.organizer_id,
        o.name AS organizer_name,
        o.email AS organizer_email,
        o.image AS organizer_image,
        s.speaker_id,
        s.name AS speaker_name,
        s.materials AS speaker_materials,
        s.phone AS speaker_phone,
        s.email AS speaker_email
    FROM 
        attende a
    JOIN 
        booking b ON a.attende_id = b.attende_id
    JOIN 
        event e ON b.event_id = e.event_id
    LEFT JOIN 
        organizer o ON e.organizer_id = o.organizer_id
    LEFT JOIN 
        speakersofevent soe ON e.event_id = soe.event_id
    LEFT JOIN 
        speaker s ON soe.speaker_id = s.speaker_id;
  `;

  // Execute the query
  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    // Send the fetched data to the client
    res.status(200).json({ message: 'Retrieved all data', users: results });
  });
}
