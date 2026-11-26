// Duplicating a discipline: the next Roman numeral in its name, and its place right below the original
const test   = require('node:test')
const assert = require('node:assert/strict')
const { makeApp, plain } = require('./harness')

test('nextNumberedName adds II, or the numeral after the one the name ends with', () => {
  const { context } = makeApp()
  const cases = {
    'Cálculo': 'Cálculo II', 'Cálculo I': 'Cálculo II', 'Cálculo II': 'Cálculo III',
    'Cálculo III': 'Cálculo IV', 'Cálculo VIII': 'Cálculo IX', 'Linguagem C': 'Linguagem C II',
    'Tópicos IIII': 'Tópicos IIII II',
  }
  for (const [name, next] of Object.entries(cases)) assert.equal(context.nextNumberedName(name), next)
})

test('duplicateDiscipline puts the copy right below the original and shifts the rest down', () => {
  const { app } = makeApp()
  const period   = app.disciplines.find(d => app.disciplinesIn(d.period).length >= 3).period
  const before   = app.disciplinesIn(period).map(d => d.id)
  const original = app.byId(before[0])
  const copy     = app.duplicateDiscipline(original.id)
  const after    = app.disciplinesIn(period).map(d => d.id)
  assert.deepEqual(after, [before[0], copy.id, ...before.slice(1)])
  assert.equal(copy.period, original.period)
  assert.equal(copy.name, app.byId(copy.id).name)
  assert.deepEqual(plain(copy.prerequisites), plain(original.prerequisites))
  assert.notEqual(copy.id, original.id)
})
