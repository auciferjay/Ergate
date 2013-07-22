var http            = require('http');
var url             = require("url");
var querystring     = require('querystring');

var sessionFactory  = require('./session');

function onStart(route, handler) {
	http.createServer(function(req, res) {
		sessionFactory.startSession(req, res, sessionHandler);
		
		var pathname = url.parse(req.url).pathname;
		var query = url.parse(req.url).query;
		
                console.log("Request for " + pathname + " received.");
                if( query === null ){
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

var sessionHandler = function(req, res) {
	var session = this;
	console.log(res.getHeader("Set-Cookie"));
};

exports.start = onStart;