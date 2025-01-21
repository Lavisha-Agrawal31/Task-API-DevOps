const express = require('express');
const taskRoutes = require('./routes/taskRoute');

const app = express();
const PORT = 5000;

app.use(express.json()); 


app.use('/tasks', taskRoutes);

app.get('/' , (req , res) => {
    res.send("Welcome to task management");
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
