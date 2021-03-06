const express = require('express');
const app = express();
const contacts = require('./contacts');
const expressHbs = require('express-handlebars');

//Make a variable to refer to built-in express static 
const static = express.static;

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

//tell Express to register th static middleware, and tell it what directory to look in for static files.
app.use(static('public'));

//Homepage! Show the user a welcome message
app.get('/', (req, res) => {
    // res.send('Haaaaayyyyyy');
    res.render('home',{
        layout: 'homepage',
        message: "Welcome to the contacts app!!!",
        headerText: "Contacts App Home Page"
    });
});

//Contacts List page: show the user all contacts

app.get('/contacts', (req, res) => {
    // res.send(contacts.users);
    res.render('contacts-list', {
        contactsArray: contacts.users
    });
});

//Contacts detail page: show the iser all info for one contact
app.get('/contacts/:id', (req, res) => {
    // res.send(`You are viewing details for ${req.params.id}`);
    let id = req.params.id;
    let contact = contacts.users.find((user) => {
        return user.id === id;
    });
    // res.send(contact);
    if(contact){
        res.render('contact-detail', {
        contact
    }); 
    } else{
        res.redirect('/');
    }
   
});




app.listen(8888, () => {
    console.log('Your express app is running at http://localhost: 8888');
})