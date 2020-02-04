const express = require('express');
const people = require('./people.json');
const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Primeira Página',
        people: people.profiles
    });
});

app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
        title: `About ${person.firstname} ${person.lastname}`,
        person,
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

const PORT = process.env.PORT || 7000;

const server = app.listen(PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});