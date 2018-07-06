var http = require('http');
var fs = require('fs');
var users = JSON.stringify([
	{
		name: "Igal",
		age: "29"
	},
	{
		name: "Denis",
		age: "31"
	}
]);

var server = http.createServer((req, res) => {
	console.log(req.url);
	switch	(req.url) {
		case '/friend':
		fs.readFile('./home.html', {encoding: "utf-8"},
			(err, html) => {
				console.log(html);
				res.write(html);
				res.end();
			})
		break;
		case '/update':
		fs.writeFile('./db.json', users, {encoding: "utf-8"},
			(err, success) => {
				console.log(success);
				res.write(success);
				res.end();
			})
		break;
		default:
		fs.readFile('.' + req.url + '.html', {encoding: "utf-8"},
		(err, html) => {
			console.log(html);
			res.write(html);
			res.end();
		})
	}
});

server.listen(3000, 'localhost');