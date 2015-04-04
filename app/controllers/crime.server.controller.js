'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Crime = mongoose.model('Crime'),
	_ = require('lodash');

exports.map = function(req, res) {
	res.render('index', {
		request: req
	});
};

exports.advancedsearch = function(req, res) {
	res.render('index', {
		request: req
	});
};

exports.updatedb = function(req, res) {
	var crimes = req.body.crimes;
	var output = {
		"crimes": []
		};

	for (var data in crimes) {
		var crime  = new Crime(x);
		crime.save(function(err) {
			if(err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			}
		});
		output["crimes"].push(crime);
	}
	res.json(output)
}

exports.getByDate = function(req, res) {
	Crime
		.where('date').equals(req.body.date)
		.sort('-date')
		.exec(function(err, list) {
			if(err) {
				return res.send(err);
			}
			res.json(list);
		})
}

exports.getByLocation = function(req, res) {
	Crime
		.where('location').equals(req.body.location)
		.sort('-date')
		.exec(function(err, list){
			if(err) {
				return res.send(err);
			}
			res.json(list);
		})
}

exports.getPrediction = function(req, res) {
	Crime
		.where('location').equals(req.body.location)
		.where('date').equals(req.body.date)
		.exec(function(err, list){
			if(err) {
				return res.send(err);
			}
		})
}
