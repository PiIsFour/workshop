import { pipe } from './pipe'

describe('pipe', () => {
	it('returns the same value if no transformations are added', () => {
		expect(pipe(5)).toBe(5)
	})

	it('applies the function', () => {
		expect(pipe(
			'hello world',
			x => x.length,
		)).toBe(11)
	})

	it('applies two function', () => {
		expect(pipe(
			'hello world',
			x => x.length,
			x => x + 1,
		)).toBe(12)
	})
})

