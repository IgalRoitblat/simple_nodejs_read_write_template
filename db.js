var http = require('http');
var fs = require('fs');
var url = require('url');
var users = [];

var server = http.createServer((req, res) => {
	res.writeHead(200, {"content-type": "text/html"});
	fs.readFile('./db.json', 'utf-8', function (err, data) {
	  if (err) throw err;
	  users = JSON.parse(data);
	  url = url.parse(req.url, true);
	  console.log(url.query);
	  users.push(url.query);
	  fs.writeFile('./db.json', JSON.stringify(users), {encoding: "utf-8"},
	  		(err, success) => {
	  			console.log('success');
	  			res.write('success');
	  			res.end();
	  		});
	});
});

server.listen(3000, 'localhost');