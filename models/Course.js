var keystone = require('keystone')
var Types = keystone.Field.Types

var Course = new keystone.List('Course')

Course.add({
  code: { type: Types.Text, default: '' },
  name: { type: Types.Text, default: '' },
  year: { type: Types.Number },
  startOn: { type: Types.Date },
  endOn: { type: Types.Date }
});

Course.defaultColumns = 'name, year';
Course.register()
