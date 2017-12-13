var keystone = require('keystone');

var Coder = keystone.list('Coder');
var Feedback = keystone.list('Feedback');

exports.list = function(req, res) {
  Coder.model.find(function(err, items) {
    if (err) return res.json({ err: err });

    res.json(items);

  });
}

exports.get = function(req, res) {
  Coder.model.findById(req.params.id).exec(function(err, item) {

    if (err) return res.json({ err: err });
    if (!item) return res.json('not found');

    res.json(item);
  });
}

exports.createFeedback = function(req, res) {
  var item = new Feedback.model(),
    data = (req.method == 'POST') ? req.body : req.query;

  item.getUpdateHandler(req).process(data, function(err) {

    if (err) return res.json({ error: err });

    res.json(item);

  });
}
