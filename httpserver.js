import http from 'http';
import fs from 'fs';

let tasks = [
    {
        id: 1,
        taskName: "Develop Login Page",
        assignedTo: "Rahul Sharma",
        status: "Pending"
    },
    {
        id: 2,
        taskName: "Design Homepage",
        assignedTo: "Amit Kumar",
        status: "Completed"
    },
    {
        id: 3,
        taskName: "Test Application",
        assignedTo: "Priya Singh",
        status: "In Progress"
    }
];

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to Employee Task Management</h1>');
    }

    else if (req.method === 'GET' && req.url === '/tasks') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tasks));
    }

    else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Employee Task Management Application</h1><p>Manage employee tasks efficiently.</p>');
    }

    else if (req.method === 'GET' && req.url === '/home') {
        fs.readFile('./public/index.html', (err, data) => {

            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading HTML file');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else if (req.method === 'POST' && req.url === '/add-task') {

        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const newTask = JSON.parse(body);

                if (
                    newTask.id === undefined ||
                    !newTask.taskName ||
                    !newTask.assignedTo ||
                    !newTask.status
                ) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'All task fields are required' }));
                    return;
                }

                if (tasks.some(task => task.id === newTask.id)) {
                    res.writeHead(409, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Task ID already exists' }));
                    return;
                }

                tasks.push(newTask);

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: 'Task added successfully',
                    task: newTask
                }));

            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid JSON format' }));
            }
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('HTTP Server running at http://localhost:3000');
});
