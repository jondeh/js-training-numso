require('./lib')

test('undefined', () => {
  let a = undefined
  expect(typeof a).toBe('undefined')
})

test('string', () => {
  let a = 'a'
  expect(typeof a).toBe('string')
})

test('number', () => {
  let a = 1
  expect(typeof a).toBe('number')
})

test('boolean', () => {
  let a = true
  expect(typeof a).toBe('boolean')
})

test('object', () => {
  let a = {}
  expect(typeof a).toBe('object')
})

test('function', () => {
  let a = () => {}
  expect(typeof a).toBe('function')
})
