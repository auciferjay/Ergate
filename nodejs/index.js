var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/login"] = requestHandlers.login;
handle["/logout"] = requestHandlers.logout;

server.start(router.route, handle);