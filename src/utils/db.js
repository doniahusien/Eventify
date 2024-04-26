// utils/db.js
import mysql from 'mysql';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'data'
});

export default db;
