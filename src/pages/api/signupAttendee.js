// pages/api/signupAttendee.js

import db from '../../utils/db';

export default function handler(req, res) {
  const { name, email, password } = req.body; // Change firstName to name

  const query = `
    INSERT INTO attendee (name, email, password)
    VALUES (?, ?, ?)
  `;
  const values = [name, email, password]; // Remove lastName from values

  db.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.status(200).json({ message: 'Attendee signed up successfully' });
  });
}
