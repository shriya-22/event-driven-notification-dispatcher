fetch("http://localhost:3000/api/v1/events", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        event_type: "order_placed",
        recipient: "user@example.com",
        data: {
            order_id: 101
        }
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log("ERROR:", err));