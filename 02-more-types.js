require('./lib')

/////////////

function typeChecker (someValue) {
  return Object.prototype.toString
    .call(someValue)
    .split(' ')[1]
    .replace(']', '')
    .toLowerCase()
}

/////////////

test('undefined', () => {
  expect(typeChecker()).toBe('undefined')
})

test('null', () => {
  expect(typeChecker(null)).toBe('null')
})

test('string', () => {
  expect(typeChecker('yo')).toBe('string')
})

test('string', () => {
  expect(typeChecker(new String('hey'))).toBe('string')
})

test('number', () => {
  expect(typeChecker(7)).toBe('number')
})

test('number', () => {
  expect(typeChecker(new Number(1))).toBe('number')
})

test('boolean', () => {
  expect(typeChecker(true)).toBe('boolean')
})

test('boolean', () => {
  expect(typeChecker(new Boolean(false))).toBe('boolean')
})

test('object', () => {
  expect(typeChecker({})).toBe('object')
})

test('array', () => {
  expect(typeChecker([])).toBe('array')
})

test('function', () => {
  expect(typeChecker(() => {})).toBe('function')
})

test('array', () => {
  expect(typeChecker(new Date())).toBe('date')
})
