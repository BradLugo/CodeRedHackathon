'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Crime = mongoose.model('Crime');

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

  crimes.forEach(function(x) {
    var crime = new Crime(x);
    crime.save(function(err) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      }
    });
    output["crimes"].push(crime);
  })
  res.json(output)
}

exports.getByDate = function(req, res) {
  Crime
    .where('date').equals(req.body.date)
    .sort('-date')
    .exec(function(err, list) {
      if (err) {
        return res.send(err);
      }
      res.json(list);
    })
}

exports.getByLocation = function(req, res) {
  Crime
    .where('beat').equals(req.body.beat)
    .sort('-date')
    .exec(function(err, list) {
      if (err) {
        return res.send(err);
      }
      res.json(list);
    })
}

exports.getPrediction = function(req, res) {
  if (typeof req.body.date != "undefined") {
    if (typeof req.body.beat != "undefined") {
      Crime
        .where('beat').equals(req.body.beat)
        .where('date').equals(req.body.date)
        .sort('date')
        .exec(function(err, list) {
          if (err) {
            return res.send(err);
          }
          return res.json(list);
        });
    } else {
      if (typeof req.body.type != "undefined") {
        Crime
          .where('date').equals(req.body.date)
          .where('type').equals(req.body.type)
          .sort('beat')
          .exec(function(err, list) {
            if (err) {
              return res.send(err);
            }
            return res.json(list);
          });
      } else {
        Crime
          .where('date').equals(req.body.date)
          .sort('type')
          .exec(function(err, list) {
            if (err) {
              return res.send(err);
            }
            return res.json(list);
          });
      }
    }
  } else {
    if (typeof req.body.beat != "undefined") {
      Crime
        .where('beat').equals(req.body.beat)
        .sort('date')
        .exec(function(err, list) {
          if (err) {
            return res.send(err);
          }
          return res.json(list);
        });
    }
    return res.json([]);
  }

}
