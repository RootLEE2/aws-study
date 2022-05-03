const express = require('express')
const app = express()
const port = 3000

const mainRouter = require('./routes/main');
const ansiWebRouter = require('./routes/ansi-web');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRouter);
app.use('/ansi/web-study', ansiWebRouter);

app.listen(port, () => {
  console.log(`Server listening on http://3.35.135.201:${port}`);
})

module.exports = app;