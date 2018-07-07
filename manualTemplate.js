var http = require('http');
var fs = require('fs');
var templates = { 
  		title: 'This is a title', 
  		message: 'This is a paragraph inside the document. Very cool.', 
  		lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati assumenda repudiandae itaque officia optio incidunt, non at recusandae, sed quasi, quia ipsam quidem quam delectus sequi adipisci voluptas eum dicta!' 
  	}

var server = http.createServer((req, res) => {
		fs.readFile('./views/index.html', {encoding: "utf-8"},
			(err, html) => {
				console.log(html);
				var rendered = html.toString()
				.replace(/{{ title }}/g, templates.title)
				.replace(/{{ message }}/g, templates.message)
				.replace(/{{ lorem }}/g, templates.lorem)
				res.write(rendered);
				res.end();
			})
});

server.listen(3000, 'localhost');
