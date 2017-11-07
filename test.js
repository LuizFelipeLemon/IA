var express = require('express');

var server = http.createServer(function(req, res) {
    var categoria = req.url;
    
    res.end("<html><body>Portal de " + categoria + "</body></html>");
    

});

server.listen(3000);