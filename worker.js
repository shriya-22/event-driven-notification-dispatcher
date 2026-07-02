const queue = require("./queue");
const db = require("./db");

setInterval(() => {
    if (queue.length === 0) return;

    const job = queue.shift();

    console.log("Processing:", job.id);

    setTimeout(() => {
        db.run(
            "UPDATE events SET status=? WHERE id=?",
            ["COMPLETED", job.id]
        );

        console.log("Completed:", job.id);
    }, 2000);

}, 1000);