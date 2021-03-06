var appRouter = function(app) {

	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'user',
	  password : 'password',
	  database : 'dbase'
	});
	connection.connect();

	/////////////////////////////////////
	app.get("/", function(req, res) {
    		res.send("Hello World\n");
	});

	app.get("/user", function(req, res) {
 		if(!req.query.username) {
        		return res.send({"status": "error", "message": "missing username"});
    		}
		else {
			connection.query('SELECT password FROM user WHERE username=\''+req.query.username+'\';', function(err, rows, fields) {
			if (err){
				res.status(203).send("Wrong query");
			}
			res.status(202).send(rows);
			console.log(rows);
			});
		}
	});

	app.post("/account", function(req, res) {
	    if(!req.body.username || !req.body.password || !req.body.twitter) {
	        return res.send({"status": "error", "message": "missing a parameter"});
	    } else {
	        return res.send(req.body);
	    }
	});

}

module.exports = appRouter;
