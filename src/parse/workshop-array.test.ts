import { flow } from '../helpers/pipe'
import { Fn } from '../helpers/fn'
import { just, map, nothing } from '../functors/maybe'

import { NonEmptyArray, parseOrThrow, parse } from './workshop-array'

it('what people usually do', () => {
	const head = (array: number[]): number | undefined => {
		return array[0]
	}

	expect(head([1, 2, 3])).toBe(1)
	expect(head([])).toBe(undefined)

	// expect(1 + head([])).toEqual(1)
})

it('what could we do instead', () => {
	const head = (array: NonEmptyArray<number>): number => {
		return array[0]
	}

	const run = flow<number[]>()(
		parseOrThrow,
		head,
	)

	expect(run([5, 3])).toEqual(5)
})

it('what could we do instead', () => {
	const head = (array: NonEmptyArray<number>): number => {
		return array[0]
	}

	const run = flow<number[]>()(
		parse,
		map(head),
	)

	expect(run([5, 3])).toEqual(just(5))
})

