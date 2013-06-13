var querystring = require('querystring');

function login(data, res ) {
	console.log(data['name']);
	console.log("Request handler 'login' was called.");
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(querystring.stringify(data));
	res.end();
}

function logout(data, res) {
	console.log("Request handler 'logout' was called.");
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(querystring.stringify(data));
	res.end();
}

exports.login = login;
exports.logout = logout;