var keystone = require('keystone')
var Types = keystone.Field.Types

var Coder = new keystone.List('Coder')

Coder.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
  pic: { type: Types.CloudinaryImage, required: true, initial: true },
  skills: { type: Types.TextArray, default: '' },
  bio: { type: Types.Textarea, default: '' },
  github: { type: Types.Url, default: '' },
  linkedin: { type: Types.Url, default: '' },
  portfolio: { type: Types.Url, default: '' },
  english: { type: Types.Select, default: 'elemental', options: ['elemental', 'basic', 'intermediate', 'advanced'] },
  resume: {
    doc: { type: Types.Url },
    pic: { type: Types.CloudinaryImage }
  },
  working: { type: Types.Boolean, default: false },
  course: { type: Types.Relationship, ref: 'Course' }
})

Coder.defaultColumns = 'name, email'

Coder.register()
