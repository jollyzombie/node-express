const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

//handlebars
app.engine('.hbs', hbs());
app.set('view engine', '.hbs');

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});


//**** PAGE Router
app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.get('/contact', (req, res) => {
  res.show('contact.html');
});

app.get('/info', (req, res) => {
  res.show('info.html');
});

app.get('/history', (req, res) => {
  res.show('history.html');
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});