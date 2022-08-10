const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static('public'));

app.get('/', (_req, res) => res.sendFile(path.join(process.cwd(), 'views', 'index.html')));
app.get('/jobs', (_req, res) => res.sendFile(path.join(process.cwd(), 'views', 'jobs.html')));

app.listen(PORT, () => console.log(`client running at http://localhost:${PORT}`));