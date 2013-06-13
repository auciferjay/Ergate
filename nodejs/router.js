function onRoute(handler, pathname, data, res) {
	console.log("About to route a request for " + pathname + " DATA: " + data);
	
	if (typeof handler[pathname] === 'function') {
		handler[pathname](data, res);
	} else {
		console.log("No request handler found for " + pathname);
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write("404 Not found");
		res.end();
	}
}

exports.route = onRoute;