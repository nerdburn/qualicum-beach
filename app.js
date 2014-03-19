var express = require('express'),
    path = require('path'),
    swig = require('swig');

// fire it up
var app = express();

// config
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'html');
app.set('view cache', false);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// render html using swig
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

// serve index.html
app.get('/', function(req, res){
    res.render(__dirname + '/public/layout.html');
});

// serve learning page
app.get('/learning', function(req, res){
    res.render(__dirname + '/public/learning.html');
});

// run it
app.listen(app.get('port'));
console.log('Server running on port %d', app.get('port'));