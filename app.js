var express = require('express');
var omnichest = require('./omnichest');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
	res.send("Express app for omnichest api ");
});

app.get('/availablebalance/:propertyId/:address', function(req, res) {
	var response = omnichest.getAvailableBalance(req.params.propertyId, req.params.address).then(function(response) {
		res.send(response);
	});
});

app.get('/reservedbalance/:propertyId/:address', function(req, res) {
	var response = omnichest.getReservedBalance(req.params.propertyId, req.params.address).then(function(response) {
		res.send(response);
	});
});

app.get('/propertyname/:propertyId', function(req, res) {
	var response = omnichest.getPropertyName(req.params.propertyId).then(function(response) {
		res.send(response);
	});
});

app.get('/transactionvalidity/:txId', function(req, res) {
	var response = omnichest.getTransactionValidity(req.params.txId).then(function(response) {
		res.send(response);
	});
});

app.get('/totaltokens/:propertyId', function(req, res) {
	var response = omnichest.getTotalTokens(req.params.propertyId).then(function(response) {
		res.send(response);
	});
});

app.get('/totaltokenstime/:propertyId', function(req, res) {
	var response = omnichest.getTotalTokensTime(req.params.propertyId).then(function(response) {
		res.send(response);
	});
});

app.get('/totaltransactions', function(req, res) {
	var response = omnichest.getTotalTransactions().then(function(response) {
		res.send(response);
	});
});

app.get('/totaltransactionstime', function(req, res) {
	var response = omnichest.getTotalTransactions().then(function(response) {
		res.send(response);
	});
});

var server = app.listen(port, function() {
	console.log("open browser to http://localhost:3000/");
});