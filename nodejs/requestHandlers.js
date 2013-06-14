var querystring = require('querystring');
var mysql = require('mysql');//npm install mysql

var config = {
				host: 'localhost',
				port: 3306,
				//socketPath:,
				user: 'root';
				password: 'root';
				database: 'test',
				insecureAuth: false,
				supportBigNumbers: false,
				bigNumberStrings: false,
				//debug:,
				stringifyObjects: false,
				timezone: 'local',
				flags: '',
				//queryFormat:,
				//pool:,
				multipleStatements: false,
				typeCast: true,
				//charset:
			 };
			 
var db;

function onConnect() {
	db = mysql.createConnection(config);
	db.connect(handleError);
	db.on('error', handleError);
}

function handleError (err) {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			connect();
		} else {
			console.error(err.stack || err);
		}
	}
}

function login(data, res ) {
	console.log("Request handler 'login' was called.");
	
	db.query("SELECT * FROM [user] WHERE username='"+data['name']+"' and password='"+data['pswd']+"';", function(error, results) {
		if(err) {
			console.log("ClientReady Error: " + error.message);
			db.end();
			
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(querystring.stringify({code:0,message:'db error'}));
			res.end();
			return;
		}
		
		console.log('Effected: ' + results.affectedRows + ' row.');
		console.log('Id inserted: ' + results.insertId);
		
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write(querystring.stringify({code:1,message:''}));
		res.end();
	});
}

function logout(data, res) {
	console.log("Request handler 'logout' was called.");
	
	db.query("SELECT * FROM [user] WHERE username='"+data['name']+"' and password='"+data['pswd']+"';", function(error, results) {
		if(err) {
			console.log("ClientReady Error: " + error.message);
			db.end();
			
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(querystring.stringify({code:0,message:'db error'}));
			res.end();
			return;
		}
		
		console.log('Effected: ' + results.affectedRows + ' row.');
		console.log('Id inserted: ' + results.insertId);
		
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write(querystring.stringify({code:1,message:''}));
		res.end();
	});
}

function send(data, res) {
	console.log("Request handler 'send' was called.");
	
	db.query("SELECT * FROM [user] WHERE username='"+data['name']+"' and password='"+data['pswd']+"';", function(error, results) {
		if(err) {
			console.log("ClientReady Error: " + error.message);
			db.end();
			
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(querystring.stringify({code:0,message:'db error'}));
			res.end();
			return;
		}
		
		console.log('Effected: ' + results.affectedRows + ' row.');
		console.log('Id inserted: ' + results.insertId);
		
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write(querystring.stringify({code:1,message:''}));
		res.end();
	});
}

exports.login = login;
exports.logout = logout;