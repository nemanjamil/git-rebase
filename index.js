const express = require('express');
const app = express();

app.get('/', (req, res) =>
    res.send('Hello World, Master Change')
);

app.listen(3000, () =>
    console.log("Port is 3000")
)