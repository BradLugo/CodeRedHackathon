'use strict'

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
            Schema = mongoose.Schema;

/**
 * Crime Schema
 */
var MessageScheme = new Schema({
        date: {
            type: Date,
        },

        username: {
            type: String,
        },

        message: {
            type: String,
        }

});

mongoose.model('Message', MessageScheme);
