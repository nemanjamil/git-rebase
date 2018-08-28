const express = require('express');
const app = express();

app.get('/', (req, res) =>
    res.send('Hello World. La Two After')
);

app.listen(3000, () =>
    console.log("Port is 3000")
)