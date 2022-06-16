const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
const port = 8080;
const fileStoreOptions = {};

const mainRouter = require('./routes/main');
const ansiWebRouter = require('./routes/ansi-web');
const labRouter = require('./routes/lab');
const inpyeonRouter = require('./routes/inpyeon');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: '2root study',
  resave: false,
  saveUninitialized: true,
  store: new FileStore(fileStoreOptions),
}));

app.use('/', mainRouter);
app.use('/ansi/web-study', ansiWebRouter);
app.use('/lab', labRouter);
app.use('/inpyeon', inpyeonRouter);

app.listen(port, () => {
  console.log(`Server listening on http://3.35.135.201:${port}`);
})

module.exports = app;