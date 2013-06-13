var http = require('http');
var url = require("url");
var querystring = require('querystring');

function onStart(route, handler) {
	http.createServer(function(req, res) {
		console.log("Request for " + pathname + " received.");
		var pathname = url.parse(req.url).pathname;
		var query = url.parse(req.url).query;
		
		if( query == null ){
			query = "";
		}else{
			query += "&";
		}
		
		req.setEncoding('utf8');
		req.addListener('data', function(postDataChunk) {
			query += postDataChunk;
		});
		req.addListener('end', function() {
			route(handler, pathname, querystring.parse(query), res);
		});
	}).listen(80, '127.0.0.1');
	console.log("Server has started.");
}

exports.start = onStart;