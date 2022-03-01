import { just, nothing } from './maybe'
import { myArray } from './myArray'

describe('my own array', () => {
	it('behaves like a normal array', () => {
		const result = myArray([1, 2, 3])
			.map(x => 2 * x)
		expect(result).toEqual(myArray([2, 4, 6]))
	})

	it('can use first', () => {
		const result = myArray(['hello', 'world'])
			.first()
			.map(string => string.length)
		expect(result).toEqual(just(5))
	})

	it('still works on an empty array', () => {
		const result = myArray<string>([])
			.first()
			.map(string => string.length)
		expect(result).toEqual(nothing())
	})
})
