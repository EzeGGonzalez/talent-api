var keystone = require('keystone')
var Types = keystone.Field.Types

var Job = new keystone.List('Job')

Job.add({
  company: { type: Types.Text, required: true, default: '' },
  address: { type: Types.Text, required: true, default: '' },
  companyDescription: { type: Types.Textarea, required: true, default: '' },
  taxId: { type: Types.Text, required: true, default: '' },
  techSkills: { type: Types.TextArray, default: [] },
  lifeSkills: { type: Types.TextArray, default: [] },
  coders: { type: Types.Textarea, required: true, default: '' },
  contactName: { type: Types.Text, required: true, default: '' },
  contactEmail: { type: Types.Text, required: true, default: '' },
  contactPhone: { type: Types.Text, required: true, default: '' }
});

Job.register()
