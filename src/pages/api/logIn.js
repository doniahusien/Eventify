import db from '../../utils/db.js';

export default function handler(req, res) {
  const query = `
  SELECT * FROM sponsor
  UNION
SELECT * FROM attende;
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.status(200).json({ message: 'Retrieved all data', users: results });
  });
}
