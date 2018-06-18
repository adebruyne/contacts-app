const express = require('express');
const app = express();
const contacts = require('./contacts');
const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Homepage! Show the user a welcome message
app.get('/', (req, res) => {
    // res.send('Haaaaayyyyyy');
    res.render('home',{
        message: "Welcome to the contacts app!!!",
        headerText: "Contacts App Home Page"
    });
});

//Contacts List page: show the user all contacts

app.get('/contacts', (req, res) => {
    res.send(contacts.users);
});

//Contacts detail page: show the iser all info for one contact
app.get('/contacts/:id', (req, res) => {
    // res.send(`You are viewing details for ${req.params.id}`);
    let id = req.params.id;
    let contact = contacts.users.find((user) => {
        return user.id === id;
    });
    res.send(contact);
});




app.listen(8888, () => {
    console.log('Your express app is running at http://localhost: 8888');
})