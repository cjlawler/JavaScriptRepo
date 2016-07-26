var express = require('express');
var app = express();

app.get('/getQuotes', function (req, res) {
   console.log("Sending stock quotes");
   res.end("This is a stock quote: 123 USD");
})

app.get('/getArmaxStockPrice', function (req, res) {
   var armaxPrice = Math.floor(Math.random() * (120 - 100 + 1)) + 100;
   console.log("Armax stock price is " + armaxPrice);
   res.end(String(armaxPrice));
})

app.get('/getRosenkovStockPrice', function (req, res) {
   var rosenkovPrice = Math.floor(Math.random() * (120 - 100 + 1)) + 100;
   console.log("Rosenkov stock price is " + rosenkovPrice);
   res.end(String(rosenkovPrice));
})

app.get('/getBinaryHelixStockPrice', function (req, res) {
   var binaryHelixPrice = Math.floor(Math.random() * (120 - 100 + 1)) + 100;
   console.log("Binary Helix stock price is " + binaryHelixPrice);
   res.end(String(binaryHelixPrice));
})

var server = app.listen(8081, function () {

	console.log("Stock Quote web services are running");

})