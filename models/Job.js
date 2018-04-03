var keystone = require('keystone')
var Types = keystone.Field.Types

var Job = new keystone.List('Job')

Job.add({
  company: { type: Types.Text, required: true, default: '' },
  address: { type: Types.Text, default: '' },
  companyDescription: { type: Types.Textarea, required: true, default: '' },
  taxId: { type: Types.Text, default: '' },
  techSkills: { type: Types.TextArray, default: [] },
  lifeSkills: { type: Types.TextArray, default: [] },
  coders: { type: Types.Textarea, default: '' },
  contactName: { type: Types.Text, required: true, default: '' },
  contactEmail: { type: Types.Text, required: true, default: '' },
  contactPhone: { type: Types.Text, default: '' }
});

Job.register()
