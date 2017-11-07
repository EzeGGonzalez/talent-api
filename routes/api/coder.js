var keystone = require('keystone');

var Coder = keystone.list('Coder');

/**
 * List Coders
 */
exports.list = function(req, res) {
  Coder.model.find(function(err, items) {
    if (err) return res.json({ err: err });

    res.json(items);

  });
}

/**
 * Get Coder by ID
 */
exports.get = function(req, res) {
  Coder.model.findById(req.params.id).exec(function(err, item) {

    if (err) return res.json({ err: err });
    if (!item) return res.json('not found');

    res.json(item);
  });
}