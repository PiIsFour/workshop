import { pipe } from '../helpers/pipe'
import { Box, box, ap } from './box'

describe('a box', () => {
	const add = (a: number) => (b: number) => a + b

	it('can add a number to the box', () => {
		const result = box(1)
			.map(add(2))
		expect(result).toEqual(box(3))
	})

	it('can we add two numbers in boxes', () => {
		const a = box(2)
		const b = box(3)

		// const result = a
		// 	.map(add)
		// 	.ap(b)
		const fnBox = a.map(add)
		const result = b.apBackwards(fnBox)

		expect(result).toEqual(box(5))
	})

	it('can we add two numbers in boxes', () => {
		const a = box(2)
		const b = box(3)

		const result: Box<number> = pipe(
			add,
			box,
			ap(a),
			ap(b),
		)

		expect(result).toEqual(box(5))
	})
})
