 About This Project

This project is a simple event-driven notification system built using Node.js, Express.js, and SQLite.

It simulates how real backend systems handle events asynchronously — by storing events, processing them in a queue, and handling them in the background using a worker.



 What This Project Does

Accepts incoming events through a REST API

Stores events in a SQLite database

Adds events to an in-memory queue

Processes events using a background worker

Simulates asynchronous notification delivery

Returns 202 Accepted immediately for better performance

 
 
 Key Features

Built with Express.js REST API

Lightweight SQLite database

Simple in-memory queue system

Background worker simulation

Asynchronous processing flow

Clean separation of modules


 
 
 Project Structure

server.js → Main server file

db.js → Database setup (SQLite)

queue.js → In-memory event queue

worker.js → Background processor

routes/events.js → API endpoints




How to Run This Project

1. Install dependencies

npm install

2. Start the server

node server.js

3. Test the API

Endpoint:

POST http://localhost:3000/api/v1/events

Request Body:

{
  "event_type": "order_placed",
  "recipient": "user@example.com",
  "data": {
    "order_id": 101
  }
}


---
 Expected Response

{
  "message": "Event Accepted",
  "event_id": 1
}


This project shows:

This project shows understanding of:

Backend API development

Event-driven architecture basics

Queue-based processing

Asynchronous programming concepts

Database integration


