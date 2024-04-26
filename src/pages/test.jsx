// pages/test.js
import React, { useState, useEffect } from 'react';

export default function Test() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    fetch('/api/logIn')
      .then(response => response.json())
      .then(data => setAttendees(data))
      .catch(error => console.error('Error fetching attendees:', error));
  }, []);

  return (
    <div>
      <h1>Attendees</h1>
      <ul>
        {attendees.map(attendee => (
          <li key={attendee.id}>{attendee.name}</li>
        ))}
      </ul>
    </div>
  );
}
