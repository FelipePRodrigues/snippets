const PORT = process.env.PORT || 7000;
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded())
app.set('view engine', 'pug');

app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));

const server = app.listen(PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});