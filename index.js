const express = require('express');
const app = express();


//Homepage! Show the user a welcome message
app.get('/', (req, res) => {
    res.send('Haaaaayyyyyy');
});

//Contacts List page: show the user all contacts

app.get('/contacts', (req, res) => {
    res.send('You are on the listing page!!!')
});

//Contacts detail page: show the iser all info for one contact
app.get('/contacts/:id', (req, res) => {
    res.send(`You are viewing details for ${req.params.id}`);
});




app.listen(8888, () => {
    console.log('Your express app is running at http://localhost: 8888');
})