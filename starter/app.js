const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//middlware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));



app.get('/hello', (req, res) => {
    res.send('Task Management App');
})

app.use('/api/v1/tasks',tasks)


const port = 3000;

app.listen(port), console.log('Server is listening on port ' + port);