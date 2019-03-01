const { someId } = require('@private-namespace/other-util')
const { getUniqueId } = require('@private-namespace/util')

it('should have a correct id', () => {
  expect(someId).toBe(0)
  expect(getUniqueId()).toBe(1)
})
