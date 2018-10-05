const safeKey = require('../')

test('handle special characters 1', () => {
  let input = encodeURIComponent('ok ok')
  let output = 'okok'
  expect(safeKey(input)).toMatch(output)
})

test('handle special characters 2', () => {
  let input = encodeURIComponent('"ok ok"')
  let output = 'okok'
  expect(safeKey(input)).toMatch(output)
})

test('handle special characters 3', () => {
  let input = encodeURIComponent('&$@=;:+ ,?name')
  let output = 'name'
  expect(safeKey(input)).toMatch(output)
})


test('handle special characters 4', () => {
  let input = '&$@=;:+ ,?name'
  let output = 'name'
  expect(safeKey(input)).toMatch(output)
})

test('handle special characters 4', () => {
  let input = 'name&$@=;:+ ,?name'
  let output = 'namename'
  expect(safeKey(input)).toMatch(output)
})
