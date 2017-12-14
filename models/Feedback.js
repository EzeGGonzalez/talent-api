var keystone = require('keystone')
var Types = keystone.Field.Types

var Feedback = new keystone.List('Feedback')

Feedback.add({
  company: { type: Types.Text, default: '' },
  communication: { type: Types.Text, default: '' },
  teamWork: { type: Types.Text, default: '' },
  role: { type: Types.Text, default: '' },
  techKnowledge: { type: Types.Text, default: '' },
  languages: { type: Types.Text, default: '' },
  wouldContinue: { type: Types.Boolean },
  coder: { type: Types.Relationship, ref: 'Coder' }
});

Feedback.defaultColumns = 'company, coder, wouldContinue';
Feedback.register()
