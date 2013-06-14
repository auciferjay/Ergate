var http = require('http');
var url = require("url");
var querystring = require('querystring');

var sessionFactory = require('./session');

function onStart(route, handler) {
	http.createServer(function(req, res) {
		sessionFactory.startSession(req, res, handler);
		
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

var handler = function(req, res) {
	var session = this;
	session.set('banana', '你个巴啦~');
	res.end(session.get('banana'));
}

exports.start = onStart;