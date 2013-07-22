var server          = require("./server");
var router          = require("./router");
var userHandlers    = require("./handlers/userHandlers");

var handle = {};
handle["/regist"]   = userHandlers.regist;
handle["/login"]    = userHandlers.login;
handle["/logout"]   = userHandlers.logout;

server.start(router.route, handle);