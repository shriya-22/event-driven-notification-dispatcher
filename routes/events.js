const express = require("express");
const router = express.Router();

const db = require("../db");
const queue = require("../queue");

router.post("/", (req, res) => {
    const { event_type, recipient, data } = req.body;

    if (!event_type || !recipient) {
        return res.status(400).json({ message: "Invalid request" });
    }

    db.run(
        "INSERT INTO events(event_type, recipient, data, status) VALUES(?,?,?,?)",
        [event_type, recipient, JSON.stringify(data), "PENDING"],
        function (err) {
            if (err) {
                return res.status(500).json({ message: "DB Error" });
            }

            queue.push({
                id: this.lastID,
                event_type,
                recipient,
                data
            });

            res.status(202).json({
                message: "Event Accepted",
                event_id: this.lastID
            });
        }
    );
});

module.exports = router;