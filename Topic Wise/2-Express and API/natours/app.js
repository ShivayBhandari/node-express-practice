const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello from the outside',
        app: 'natours'
    })
});

app.post('/', (req, res) => {
    res.send('You can send to this input and the server is here for you to listen, you are not alone');
});



const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});