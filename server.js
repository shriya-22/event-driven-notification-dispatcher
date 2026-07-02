const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // MUST be here
app.use(express.json());

app.get("/test", (req, res) => {
    res.json({ status: "OK" });
});

app.post("/api/v1/events", (req, res) => {
    console.log("Request received");

    res.status(202).json({
        message: "Event Accepted",
        event_id: 1
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});