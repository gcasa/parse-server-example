
Parse.Cloud.define('hello', function(req, res) {
	res.success('Hi');
});

Parse.Cloud.define('searchesNumber', function(req, res) {
	var results = [];
    res.success(results);
});
