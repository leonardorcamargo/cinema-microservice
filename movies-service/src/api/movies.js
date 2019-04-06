module.exports = (app, repository) => {
	
	app.get('/movies', (req, res, next) => {
		repository.getAllMovies((err, movies) => {
			if (err) return next(err);
			res.json(movies);
		});
		repository.disconnect();
	})

	app.get('/movies/premieres', (req, res, next) => {
		repository.getMoviePremiers((err, movies) => {
			if (err) return next(err);
			res.json(movies);
		});
		repository.disconnect();
	})

	app.get('/movies/:id', (req, res, next) => {
		repository.getMovieById(req.params.id, (err, movie) => {
			if (err) return next(err);
			res.json(movie);
		});
		repository.disconnect();
	})
}