const express = require('express');
require('./db/mongoose'); // Make sure DB connects

const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = 3000;

app.use(express.json());

// POST /users
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

// POST /tasks
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});
