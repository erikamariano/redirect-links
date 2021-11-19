const express = require('express');
const app = express();
const port = 5500;
const mongoose = require('mongoose');
const path = require('path');

const classLinkRoute = require('./routes/classLinkRoute');

app.listen(port, () => { console.log(`Running now on port ${port}`) });

mongoose.connect('mongodb://localhost/newLinks', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { console.log('Mongo Ligado!') });

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'));

app.use('/', classLinkRoute);
