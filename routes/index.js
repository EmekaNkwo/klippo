const router = require('express').Router();

module.exports = () => {
	router.get('/', (req, res) => {
		res.render('home');
	});
	return router;
};
