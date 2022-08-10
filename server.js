const express = require('express');
const path = require('path');
const ejs = require('ejs');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static('public'));

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', './src/views');

const navbar = require('./src/routes/navbar.js');

app.use(navbar);

app.listen(PORT, () => console.log(`client running at http://localhost:${PORT}`));