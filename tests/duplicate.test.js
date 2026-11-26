// Duplicating a discipline: same name, placed right below the original
const test   = require('node:test')
const assert = require('node:assert/strict')
const { makeApp, plain } = require('./harness')

test('duplicateDiscipline keeps the name, puts the copy right below the original and shifts the rest down', () => {
  const { app } = makeApp()
  const period   = app.disciplines.find(d => app.disciplinesIn(d.period).length >= 3).period
  const before   = app.disciplinesIn(period).map(d => d.id)
  const original = app.byId(before[0])
  const copy     = app.duplicateDiscipline(original.id)
  const after    = app.disciplinesIn(period).map(d => d.id)
  assert.deepEqual(after, [before[0], copy.id, ...before.slice(1)])
  assert.equal(copy.name, original.name)
  assert.equal(copy.period, original.period)
  assert.deepEqual(plain(copy.prerequisites), plain(original.prerequisites))
  assert.notEqual(copy.id, original.id)
})
