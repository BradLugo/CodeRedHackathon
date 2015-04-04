'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Message = mongoose.model('Message'),
    _ = require('lodash');

exports.index = function(req, res) {
	es.render('index', {
		request: req
	});
}

exports.getMessage = function(req, res) {
    // GET
    Message
        .where('date').gt(req.params.begindate).lt(req.params.enddate)
        .sort('-date')
        .exec(function(err, list) {
            if (err) {
                return res.send(err);
            }
            res.json(list);
        })
}

exports.postMessage = function(req, res) {
    // POST
    var msg = new Message(req.body.message);
    msg.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        res.json(req.body.message)
    });
}
