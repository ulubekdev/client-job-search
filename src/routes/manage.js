const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/jobs', (req, res) => {
    res.render('jobs.html');
});

router.get('/jobs/:title', (req, res) => {
    res.render('job.html');
});

router.get('/about', (req, res) => {
    res.render('about.html');
});

router.get('/contact', (req, res) => {
    res.render('contact.html');
});

router.get('/register', (req, res) => {
    res.render('register.html');
});

module.exports = router;