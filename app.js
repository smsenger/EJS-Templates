const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', 'views');


const data = [
    {
        id: 1,
        special: 'mustard ice cream'
    },

    {
        id: 2,
        special: 'lamb popsicle'
    },

    {
        id: 3,
        special: 'just bread' 
    }
]

app.get('/about', (req, res) => {
    res.render('about', {        //takes an obj. can define array of obj and use its var name here instead --> above, use data in place will add these specials
        title: 'Trashtaurant', 
        specials: data, 
    });
});


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
});