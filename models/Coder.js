var keystone = require('keystone')
var Types = keystone.Field.Types

var Coder = new keystone.List('Coder')

var storageResumeDoc = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: './data/resumes/doc'
  },
});

var storageResumePic = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./uploads/resumes/pic'),
    publicPath: '/resumes/pic'
  }
});

Coder.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
  pic: { type: Types.CloudinaryImage, required: true, initial: true },
  skills: { type: Types.TextArray, default: '' },
  bio: { type: Types.Textarea, default: '' },
  github: { type: Types.Url, default: '' },
  linkedin: { type: Types.Url, default: '' },
  portfolio: { type: Types.Url, default: '' },
  tech: {
    intro: { type: Types.Number, default: 0 },
    front: { type: Types.Number, default: 0 },
    prototyping: { type: Types.Number, default: 0 },
    prototyping_2: { type: Types.Number, default: 0 },
    js_next_steps: { type: Types.Number, default: 0 }
  },
  life: {
    attendance: { type: Types.Number, default: 0 },
    comunication: { type: Types.Number, default: 0 },
    excellency: { type: Types.Number, default: 0 },
    stress: { type: Types.Number, default: 0 },
    teamwork: { type: Types.Number, default: 0 }
  },
  english: { type: Types.Select, default: 'elemental', options: ['elemental', 'basic', 'intermediate', 'advanced'] },
  resume: {
    doc: { type: Types.File, storage: storageResumeDoc },
    pic: { type: Types.File, storage: storageResumePic }
  }
})

Coder.defaultColumns = 'name, email'

Coder.register()
