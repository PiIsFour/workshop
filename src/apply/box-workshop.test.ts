import { pipe } from '../helpers/pipe'
import { box } from './box-workshop'

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

		// expect(result).toEqual(box(5))
	})
})
