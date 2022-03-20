import { Counter, log, readA } from './commandQuerySeparation'

it('does something', () => {
	expect(log()).toBe(undefined)
})

it('does not matter how often', () => {
	const x = readA()
	const square = x * x

	const square2 = readA() * readA()

	expect(square2).toBe(square)
})

it('should do what you would expect', () => {
	const c = new Counter()

	c.tick()
	c.tick()
	c.tick()

	expect(c.read()).toBe(3)
	c.reset()

	c.tick()
	c.tick()
	c.tick()

	expect(c.read()).toBe(3)
})
