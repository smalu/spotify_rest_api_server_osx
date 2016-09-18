var spotify		= require('spotify-node-applescript'),
	restify		= require('restify');

var self = module.exports = {
	
	getTrack: function(req, res, next){
		
		spotify.getTrack(function(err, track){

			if(err !== null){

				return next(restify.errors.InternalServerError);

			}

			res.send(track);

		});

		return next();
		
	},
	
	getState: function (req, res, next) {
		
		spotify.getState(function(err, state){

			if(err !== null){

				return next(restify.errors.InternalServerError);

			}

			res.send(state);

		});

		return next();

	},
	
	setTrack: function(req, res, next) {
		
		if(req.params.track_id == null){
		
			return next(new restify.errors.MissingParameterError("You must send track's id (track_id parameter)"));

		}
	
		spotify.playTrack(req.params.track_id);

		return self.getTrack(req, res, next);
		
	},
	
	next: function(req, res, next) {
		
		spotify.next();

		return self.getState(req, res, next);
		
	},
	
	prev: function(req, res, next) {
		
		spotify.prev();

		return self.getState(req, res, next);
		
	},
	
	play: function(req, res, next) {
		
		spotify.play();

		return self.getState(req, res, next);
		
	},
	
	pause: function(req, res, next) {
		
		spotify.pause();

		return self.getState(req, res, next);
		
	}
	
};