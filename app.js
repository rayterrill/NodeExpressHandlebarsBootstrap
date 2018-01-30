var express = require('express');
var app = express();

var appMode = app.get('env');

//configure logging
switch(appMode) {
   case 'development':
      app.use(require('morgan')('dev'));
      break;
   case 'production':
      app.use(require('express-logger')({
         path: __dirname + '/log/requests.log'
      }));
      break;
}

var index = require('./routes/index');

//set the port express will run under
app.set('port', process.env.PORT || 3000);

//configure the /public subdirectory to serve static files
app.use(express.static(__dirname + '/public'));

//set up the handlebars view engine
var handlebars = require('express-handlebars')
   .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use('/', index);

//custom 404 page
app.use(function(req, res) {
	res.status(404);
	res.render('404');
});

//custom 500 page
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
   console.log('Express started on http://localhost:' + app.get('port') + ' in [' + appMode + '] mode; press Ctrl-C to terminate.');
});
