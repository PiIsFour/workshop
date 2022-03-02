import { future } from './future'

describe('future is like promise', () => {
	it('then is a map', () => {
		const result = future(Promise.resolve(5))
			.map(x => x - 4)
		expect(result).toEqual(future(Promise.resolve(1)))
	})
})

