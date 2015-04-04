module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.route('/').get(core.index);
	app.route('/map').get(crime.map);
	app.route('/advancedsearch').get(crime.advancedsearch);
	app.route('/updatedb').post(crime.updatedb);
	app.route('/messageboard').get(messageboard.index);
	app.route('/getmessage/:begindate/:enddate').get(messageboard.getMessage);
	app.route('/postmessage').post(messageboard.postMessage);
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
