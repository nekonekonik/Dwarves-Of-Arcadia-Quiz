var express = require('express');
var app = express();

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/assets'));
