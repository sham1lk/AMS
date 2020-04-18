const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'pug');

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'yo bro, you made a mistake with the address',
}));



app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));
