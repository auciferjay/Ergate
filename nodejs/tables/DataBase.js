var mysql       = require('mysql');//npm install mysql

var config = {
                    host: 'localhost',
                    port: 3306,
                    //socketPath:,
                    user: 'root',
                    password: '******',
                    database: 'test',
                    insecureAuth: true,
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
                    charset:'utf-8'
             };
			 
var client;

function onConnect() {
	client = mysql.createConnection(config);
	client.connect(handleError);
	client.on('error', handleError);
}

onConnect();

function handleError(err) {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			onConnect();
		} else {
			console.error(err.stack || err);
		}
	}
}

exports.client = client;