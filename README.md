# shapeshiftio-node
nodejs API for omnichest

### Installation

```
npm install omnichest
```

### Instance

```
var omnichest = require('omnichest');
```
### Usage

```
omnichest.method(<args>).then(function(response) {
		//Results here
	});
```

### Methods
Refer to the [Omnichest API](http://omnichest.info/api.aspx) to know about each output and explanation
```
getAvailableBalance(propertyId,address)
getReservedBalance(propertyId,address)
getPropertyName(propertyId)
getTransactionValidity(txId)
getTotalTokens(propertyId)
getTotalTokensTime(propertyId)
getTotalTransactions()
getTotalTransactionsTime()
```

### Development

Feel free to fork from [omnichest-node](https://github.com/sgsshankar/omnichest-node)

### Issues

https://github.com/sgsshankar/omnichest-node/issues


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sgsshankar/omnichest-node/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

