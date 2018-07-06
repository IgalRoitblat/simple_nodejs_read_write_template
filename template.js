const express = require('express');
const app = express();
var fs = require('fs');

app.engine('ntl', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)
    var rendered = content.toString()
    .replace('{{ title }}', options.title)
    .replace('{{ message }}', options.message)
    .replace('{{ lorem }}', options.lorem)
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'ntl')

app.listen(3000, () => console.log('This app is listening on port 3000!'))

app.get('/', function (req, res) {
  res.render('index', { 
  	title: 'This is a title', 
  	message: 'This is a paragraph inside the document. Very cool.', 
  	lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati assumenda repudiandae itaque officia optio incidunt, non at recusandae, sed quasi, quia ipsam quidem quam delectus sequi adipisci voluptas eum dicta!' 
  	})
})