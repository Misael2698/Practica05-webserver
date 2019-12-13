const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')
const port = process.env.PORT || 3000;
//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
//helpers

app.get('/', function(req, res) {
    //estamos usando plantilaaY
    res.render('home', {
        nombre: "mIsael Cabascango"
    });
});
app.get('/about', function(req, res) {
    res.render('about')
});

app.listen(port, () => {
    console.log(`escichando peticiones en el puerto ${port}`);
});