import { box } from './box-workshop'

describe('a box', () => {
	const inc = (number: number) => number + 1
	const length = (string: string) => string.length

	it('we can put in a number', () => {
		const test = box(5)
		expect(test).toEqual(box(5))
	})

	it('we can increment the content', () => {
		const test = box(1)
			.map(inc)
		expect(test).toEqual(box(2))
	})

	it('compose function', () => {
		const test = box('hello world')
			.map(length)
			.map(inc)

		expect(test).toEqual(box(12))
	})
})
