module.exports = [
  {
    type: 'input',
    name: 'desc',
    message: 'Project Description',
    validate: input => !!input,
    default: 'desc'
  },
  {
    type: 'input',
    name: 'repo',
    message: 'Git Repository',
    validate: input => !!input,
    default: 'https://github.com/abaldeweg'
  },
  {
    type: 'input',
    name: 'author',
    message: 'Author Name',
    validate: input => !!input,
    default: 'John Doe'
  },
  {
    type: 'input',
    name: 'mail',
    message: 'Author Mail',
    validate: input => !!input,
    default: 'none'
  },
  {
    type: 'input',
    name: 'license',
    message: 'License',
    validate: input => !!input,
    default: 'proprietary'
  },
]
