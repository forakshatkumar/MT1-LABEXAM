# Employee Task Management Web Application

A Full Stack Development lab project built using **Node.js and Express.js**. This application demonstrates HTTP server creation, routing, file handling, and REST API implementation using JavaScript arrays without requiring a database.

## Technologies Used

- Node.js
- Express.js
- JavaScript (ES6 Modules)
- HTTP Module
- FS (File System) Module
- EchoAPI (API Testing)
- Git & GitHub

## Project Structure

```text
MT1-LABEXAM/
│
├── public/
│   └── index.html
│
├── screenshots/
│   └── API and server screenshots
│
├── httpServer.js
├── expressApp.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/MT1-LABEXAM.git
```

**2. Navigate to the project directory**

```bash
cd MT1-LABEXAM
```

**3. Install dependencies**

```bash
npm install
```

## Running the Application

The project contains two independent servers.

### Part A: Node.js HTTP Server

Run:

```bash
node httpServer.js
```

Server runs at:

`http://localhost:3000`

Available Routes:

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Displays welcome message |
| GET | `/tasks` | Retrieves all employee tasks |
| GET | `/about` | Displays application information |
| GET | `/home` | Serves HTML page using FS module |
| POST | `/add-task` | Adds a new employee task |

### Part B: Express.js REST API

Open another terminal and run:

```bash
node expressApp.js
```

Server runs at:

`http://localhost:4000`

### REST API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Retrieve task by ID |
| POST | `/tasks` | Add a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

## Employee Task Object

Each employee task contains the following fields:

```json
{
  "id": 1,
  "taskName": "Develop Login Page",
  "assignedTo": "Rahul Sharma",
  "status": "Pending",
  "priority": "High"
}
```

## Sample API Request

**POST – Add a new task**

URL: `http://localhost:4000/tasks`

Request Body:

```json
{
  "id": 4,
  "taskName": "Develop REST API",
  "assignedTo": "Amit Kumar",
  "status": "Pending",
  "priority": "Medium"
}
```

Expected Response:

```json
{
  "message": "Task added successfully",
  "task": {
    "id": 4,
    "taskName": "Develop REST API",
    "assignedTo": "Amit Kumar",
    "status": "Pending",
    "priority": "Medium"
  }
}
```

## Features

- HTTP server creation using Node.js.
- Routing and handling of different HTTP methods.
- Reading and serving static HTML files using the FS module.
- REST API implementation using Express.js.
- Complete CRUD operations (Create, Read, Update, Delete).
- JSON request and response handling.
- Route parameter handling.
- Request validation and error handling.
- In-memory task management using JavaScript arrays.

## API Testing

All REST API endpoints are tested using **EchoAPI**.

Screenshots of server execution and API responses are available in the `screenshots/` directory.

## Database

No database is used in this project. Employee task records are maintained in JavaScript arrays.

**Note:** Data is stored in memory and resets to the initial sample records whenever the respective server restarts.

## Author

**Akshat Kumar**

B.Tech – Computer Science and Engineering

Full Stack Development – MT1 Lab Examination

---

*Developed as part of the Full Stack Development laboratory examination.*