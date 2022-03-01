import { box } from './box'

describe('a box', () => {
	it('with a number is equal to itself', () => {
		const test = box(5)
		expect(test).toEqual(test)
	})

	it('with a number is equal to a different box with the same number', () => {
		const test = box(99)
		expect(test).toEqual(box(99))
	})

	it('with a number is not equal to a different box with a different number', () => {
		const test = box(99)
		expect(test).not.toEqual(box(-50))
	})

	it('can take a string', () => {
		const test = box('hello world')
		expect(test).toEqual(box('hello world'))
	})
})

describe('the content can be transformed without leaving the box', () => {
	const inc = (number: number) => number + 1
	const length = (string: string) => string.length

	it('can increment a number', () => {
		const test = box(9)
		const result = test.map(inc)
		expect(result).toEqual(box(10))
	})

	it('can chain maps', () => {
		const result = box(1)
			.map(inc)
			.map(inc)
		expect(result).toEqual(box(3))
	})

	it('can transform the type', () => {
		const result = box('hello world')
			.map(length)
		expect(result).toEqual(box(11))
	})

	it('can transform in multiple steps', () => {
		const result = box('hello world')
			.map(length)
			.map(inc)
		expect(result).toEqual(box(12))
	})
})
