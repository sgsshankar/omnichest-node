var unirest = require("unirest");
var querystring = require("querystring");
var config = require('./config');
var Promise = require('promise/domains');

module.exports = {

	getAvailableBalance: function(propertyId, address) {
		var url = 'stat=balance&prop=' + propertyId + '&address=' + address;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getReservedBalance: function(propertyId, address) {
		var url = 'stat=reservedbalance&prop=' + propertyId + '&address=' + address;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getPropertyName: function(propertyId) {
		var url = 'stat=propertyName&prop=' + propertyId;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getTransactionValidity: function(txId) {
		var url = 'stat=checkvalid&txid=' + txId;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getTotalTokens: function(propertyId) {
		var url = 'stat=tokenstotal&prop=' + propertyId;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getTotalTokensTime: function(propertyId) {
		var url = 'stat=tokenstransferred24hr&prop=' + propertyId;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getTotalTransactions: function() {
		var url = 'stat=txcount24hr'
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getTotalTransactionsTime: function() {
		var url = 'stat=txcount24hr&prop=' + propertyId;
		var result = sendRequest(url, 'GET', {});
		return result;
	}
};

function sendRequest(fullpath, method, querystring) {

	var options = {
		url: config.config.hostUrl + fullpath,
		qs: querystring,
		method: method,
		headers: {
			'Content-Type': 'multipart/text',
			'User-Agent': 'omnichest',
			'Accept': 'multipart/text'
		}
	};

	return new Promise(function(resolve, reject) {
		if (method == "GET") {
			unirest.get(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response.body);
				});
		} else if (method == "POST") {
			unirest.post(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response.body);
				});

		}
	});

}