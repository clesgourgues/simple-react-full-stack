const express = require('express');
const destinations = require('./destinations.json');

const app = express();

app.use(express.static('dist'));
app.get('/api/getDestinations', (req, res) => res.send({ destinations }));
app.listen(8080, () => console.log('Listening on port 8080!'));
