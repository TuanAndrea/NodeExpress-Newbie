var db = require('../db');

module.exports.index = function(req, res) {
	var page = parseInt(req.query.page) || 1; //n
	var limit = parseInt(req.query.limit) || 8; //x
	var start = (page - 1) * limit;
	var end = page * limit;

	var results = {};
	var products = db.get('products').value();

	results.pages = [];

	for (var i = 1; i <= Math.ceil(products.length / limit); i++) {
		results.pages.push({
			page: i,
			limit: limit
		});
	}

	if (end < products.length) {
		results.next = {
			page: page + 1,
			limit: limit
		};
	} else {
		results.next = {
			page: page,
			limit: limit
		};
	}

	if (start > 0) {
		results.previous = {
			page: page - 1,
			limit: limit
		};
	} else {
		results.previous = {
			page: 1,
			limit: limit
		};
	}

	results.products = products.slice(start, end);	

	res.render('products/index', {
		results
	});
};