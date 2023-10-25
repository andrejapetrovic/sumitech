const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('static'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'));
})

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'services.html'));
})

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'news.html'));
})

app.get('/references', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'references.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'contact.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
