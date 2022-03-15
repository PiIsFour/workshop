import { Counter, log, readA } from './commandQuerySeparation'

xit('does something', () => {
	expect(log()).toBe(undefined)
})

xit('does not matter how often', () => {
	const x = readA()
	const square = x * x

	const square2 = readA() * readA()

	expect(square2).toBe(square)
})

xit('should do what you would expect', () => {
	const c = new Counter()

	c.tick()
	c.tick()
	c.tick()

	expect(c.read()).toBe(3)

	// c.tick()
	// c.tick()
	// c.tick()

	// expect(c.read()).toBe(6)
})
