var keystone = require('keystone');

var Job = keystone.list('Job');

/**
 * Create a Job Post
 */
exports.create = function(req, res) {
  var item = new Job.model(),
    data = (req.method == 'POST') ? req.body : req.query;

  item.getUpdateHandler(req).process(data, function(err) {

    if (err) return res.json({ error: err });

    res.json(item);

  });
}