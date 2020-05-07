const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
app.use(logger('dev'));

//set bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Set views folde
app.set('views', './views');
app.set('view engine', 'vash');

require('./server/routes')(app);

// if there is not such route
app.get('*', (req, res) => res.status(200).send({
  message: 'yo bro, you made a mistake with the address',
}));



app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));
