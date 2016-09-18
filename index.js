var spotify		= require('spotify-node-applescript'),
	restify		= require('restify'),
	handlers	= require('./lib/handlers.js');
	
	
var server = restify.createServer({
  name:		'spotify_rest_api_server_osx',
  version:	'1.0.0'
});


server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
 

 
server.get('/track', handlers.getTrack);
server.get('/state', handlers.getState);
server.put('/track', handlers.setTrack);
server.post('/next', handlers.next);
server.post('/prev', handlers.prev);
server.post('/play', handlers.play);
server.post('/pause', handlers.pause);

server.listen(8080, function () {
	console.log('%s listening at %s', server.name, server.url);
});