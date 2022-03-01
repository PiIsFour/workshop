import { just, nothing } from './maybe'

describe('maybe', () => {
	it('can have a value', () => {
		const result = just('hello world')
			.map(string => string.length)
		expect(result).toEqual(just(11))
	})

	it('may not have an value', () => {
		const result = nothing<string>()
			.map(string => string.length)
		expect(result).toEqual(nothing())
	})
})

