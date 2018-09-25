var express = require('express');
var app = express();
var path = require('path');


// app.use(express.static(__dirname + 'assets'));
app.use(express.static('assets'))
app.use('/assets', express.static(path.join(__dirname, 'images')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});