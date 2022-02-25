require('./lib')

/////////////

function createAdder () {
  let value = 0
  return {
    add: num => (value += num),
    value: () => value
  }
}

/////////////

test('lets me add 2 things together', () => {
  let adder = createAdder()
  adder.add(3)
  adder.add(4)
  adder.add(5)
  expect(adder.value()).toBe(12)
})

/////////////

function random () {
  return Math.floor(Math.random(10))
}

/////////////

test('random', () => {
  for (let i = 0; i < 1000; ++i) {
    expect(random()).toBeOneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  }
})

/////////////

function compose (...args) {
  return num => args.reduce((acc, val) => val(acc), num)
}

/////////////

test('can compose functions', () => {
  let num = random()
  let one = a => a * 2
  let two = b => b + 3
  let three = () => num

  let fn = compose(one, two)
  expect(fn(1)).toBe(5)
  expect(fn(7)).toBe(17)

  let fn2 = compose(three, two, one)
  expect(fn2()).toBe((num + 3) * 2)
})

/////////////

function uppity (strings, ...values) {
  let newValues = [...values, ''].map(e =>
    typeof e === 'string' ? e.toUpperCase() : e + 1
  )
  const arr3 = []
  for (i in strings) {
    arr3.push(strings[i], newValues[i])
  }
  return arr3.join('')
}

/////////////

test('template tagged literal', () => {
  expect(uppity`hey`).toBe('hey')
  expect(uppity`hello ${'bob'}, how are you ${'doing'}?`).toBe(
    'hello BOB, how are you DOING?'
  )
  expect(uppity`${1} + ${2} = ${3}`).toBe('2 + 3 = 4')
})
