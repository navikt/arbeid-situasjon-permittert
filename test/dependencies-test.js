const test = require('ava')
const pkg = require('../package.json')
const devDependencies = pkg.devDependencies || {}
const dependencies = pkg.dependencies || {}
const dropModules = [
  'amplitude-js',
  'nav-frontend-core',
  'nav-frontend-knapper',
  'nav-frontend-knapper-style',
  'nav-frontend-lenker',
  'nav-frontend-lenker-style',
  'nav-frontend-paneler',
  'nav-frontend-paneler-style',
  'nav-frontend-skjema',
  'nav-frontend-skjema-style',
  'nav-frontend-stegindikator',
  'nav-frontend-stegindikator-style',
  'nav-frontend-typografi',
  'nav-frontend-typografi-style'
]
const isDropped = module => !dropModules.includes(module)

test('basic check', t => {
  t.true(true, 'ava works ok')
})

if (Object.keys(dependencies).length > 0) {
  Object.keys(dependencies).filter(isDropped).forEach(dependency => {
    test(`${dependency} loads ok`, t => {
      const module = require(dependency)
      t.truthy(module)
    })
  })
} else {
  test('no dependecies to test', t => {
    t.truthy(true)
  })
}

if (Object.keys(devDependencies).length > 0) {
  Object.keys(devDependencies).filter(isDropped).forEach(dependency => {
    test(`${dependency} loads ok`, t => {
      const module = require(dependency)
      t.truthy(module)
    })
  })
} else {
  test('no dev-dependecies to test', t => {
    t.truthy(true)
  })
}
