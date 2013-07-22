var querystring = require('querystring');
var User = require('../tables/UserTable').User;

function regist(data, res) {
        console.log("Request handler 'login' was called.");
        var user = new User();
            user.$name = data['name'];
            user.$pswd = data['pswd'];
            if( user.$name !== undefined && user.$pswd !== undefined && user.$name !== "" && user.$pswd !== "" ){
                    user.isExist(function() {
                            if( user.$id === 0 ){
                                    user.add(function() {
                                            if( user.$id === 0 ) {
                                                    res.writeHead(200, {'Content-Type': 'text/plain'});
                                                    res.write(querystring.stringify({code:0, message:'db error'}));
                                                    res.end();
                                            }else{
                                                    res.writeHead(200, {'Content-Type': 'text/plain'});
                                                    res.write(querystring.stringify({code:1}));
                                                    res.end();
                                            }
                                    });
                            }else{
                                    res.writeHead(200, {'Content-Type': 'text/plain'});
                                    res.write(querystring.stringify({code:0, message:'user exist'}));
                                    res.end();
                            }
                    });
            }else{
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.write(querystring.stringify({code:0, message:'empty data'}));
                    res.end();
            }
}

function login(data, res) {
	console.log("Request handler 'login' was called.");
	
        var user = new User();
            user.$name = data['name'];
            user.$pswd = data['pswd'];
            if( user.$name !== undefined && user.$pswd !== undefined && user.$name !== "" && user.$pswd !== "" ){
                    user.get(function() {
                            if( user.$id === 0 ) {
                                    res.writeHead(200, {'Content-Type': 'text/plain'});
                                    res.write(querystring.stringify({code:0, message:'wrong message'}));
                                    res.end();
                            }else{
                                    res.writeHead(200, {'Content-Type': 'text/plain'});
                                    res.write(querystring.stringify({code:1}));
                                    res.end();
                            }
                    });
            }else{
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.write(querystring.stringify({code:0, message:'empty data'}));
                    res.end();
            }
}

function logout(data, res) {
	var user = new User();
            user.$name = data['name'];
            user.$pswd = data['pswd'];
            if( user.$name !== undefined && user.$pswd !== undefined && user.$name !== "" && user.$pswd !== "" ){
                    user.get(function() {
                            if( user.$id === 0 ) {
                                    res.writeHead(200, {'Content-Type': 'text/plain'});
                                    res.write(querystring.stringify({code:0, message:'wrong message'}));
                                    res.end();
                            }else{
                                    res.writeHead(200, {'Content-Type': 'text/plain'});
                                    res.write(querystring.stringify({code:1}));
                                    res.end();
                            }
                    });
            }else{
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.write(querystring.stringify({code:0, message:'empty data'}));
                    res.end();
            }
}

exports.regist = regist;
exports.login = login;
exports.logout = logout;