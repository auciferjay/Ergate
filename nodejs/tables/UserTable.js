var client = require('./DataBase').client;

var TABLE = 'NJUser';
User = function() {
        var $id = 0;
        var $name = '';
        var $pswd = '';
        var init = function() {
            client.query(
                    'CREATE TABLE IF NOT EXISTS '+TABLE+
                    '(id INT(11) AUTO_INCREMENT, '+
                    'username VARCHAR(255), '+
                    'password VARCHAR(255), '+
                    'created DATETIME, '+
                    'PRIMARY KEY (id))'
            );
        };
        init();
};
User.prototype.get = function(callback) {
        client.query("SELECT * FROM "+TABLE+" WHERE username='"+this.$name+"' AND password='"+this.$pswd+"'", function(err, results){
                console.log(err);
                console.log(results);
                callback();
        });
};
User.prototype.isExist = function(callback) {
        client.query("SELECT * FROM "+TABLE+" WHERE username='"+this.$name+"'", function(err, results){
                if( err ){
                    
                }else{
                    this.$id = results.insertId;
                }
                callback();
        });
};
User.prototype.getById = function() {
        client.query("SELECT * FROM "+TABLE+" WHERE id="+this.$id, function(err, results){
                console.log(err);
                console.log(results);
                callback();
        });
};
User.prototype.update = function(callback) {
        client.query("UPDATE "+TABLE+" SET username='"+this.$name+"', password='"+this.$pswd+"', WHERE id="+this.$id, function(err, results){
                console.log(err);
                console.log(results);
                callback();
        });
};
User.prototype.add = function(callback) {
        client.query("INSERT INTO "+TABLE+ " VALUES(null, '"+this.$name+"', '"+this.$pswd+"', now())", function(err, results){
                if( err ){
                    
                }else{
                    this.$id = results.insertId;
                }
                callback();
        });
};
User.prototype.remove = function(callback) {
        client.query("DROP FROM "+TABLE+" WHERE id="+this.$id, function(err, results){
                console.log(err);
                console.log(results);
                callback();
        });
};

exports.User = User;