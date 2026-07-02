const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./notifications.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_type TEXT,
      recipient TEXT,
      data TEXT,
      status TEXT
    )
  `);
});

module.exports = db;