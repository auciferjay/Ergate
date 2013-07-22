var fs = require("fs");

function onRoute(handler, pathname, data, res) {
	console.log("About to route a request for " + pathname + " DATA: " + data);
	
	if (typeof handler[pathname] === 'function') {
		handler[pathname](data, res);
	} else {
		console.log("No request handler found for " + pathname);
		res.writeHead(200, {"Content-Type": "text/html"});
                fs.readFile('index.html', function(err, data) {
                        res.write(data);
                        res.end();
                });
	}
}

exports.route = onRoute;