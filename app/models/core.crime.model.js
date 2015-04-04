'use strict'

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
            Schema = mongoose.Schema;

/**
 * Crime Schema
 */
var CrimeScheme = new Schema({
        date: {
            type: Date,
        },

        hour: {
            type: Number,
        },

        street: {
            type: String,
        },

        type: {
          type: String,
        },

        block: {
          type: String,
        },

});

mongoose.model('Crime', CrimeScheme);
