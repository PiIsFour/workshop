import { flow } from '../helpers/pipe'
import { Fn } from '../helpers/fn'
import { just, map, nothing } from '../functors/maybe'

import { NonEmptyArray, parseNonEmptyArray, parseNonEmptyArrayOrUndefined, parseNonEmptyArrayThrow } from './nonEmptyArray'

it('what people usually do', () => {
	const head = (array: number[]): number | undefined => {
		return array[0]
	}

	expect(head([1, 2, 3])).toBe(1)
	expect(head([])).toBe(undefined)
})

it('what if we strengthen the arguments', () => {
	const head = (array: NonEmptyArray<number>): number => {
		return array[0]
	}

	const run = flow<number[]>()(
		parseNonEmptyArrayThrow,
		head,
	)

	expect(run([1, 2, 3])).toBe(1)

	expect(() => run([])).toThrow()
})

it('what if we strengthen the arguments', () => {
	const head = (array: NonEmptyArray<number>): number => {
		return array[0]
	}

	const ifNotUndefined = <A, B>(fn: Fn<A, B>) => (value: A | undefined): B | undefined => {
		if(value === undefined) {
			return undefined
		}
		return fn(value)
	}

	const run = flow<number[]>()(
		parseNonEmptyArrayOrUndefined,
		ifNotUndefined(head),
	)

	expect(run([1, 2, 3])).toBe(1)

	expect(run([])).toBe(undefined)
})

it('what if we strengthen the arguments', () => {
	const head = (array: NonEmptyArray<number>): number => {
		return array[0]
	}

	const run = flow<number[]>()(
		parseNonEmptyArray,
		map(head),
	)

	expect(run([1, 2, 3])).toEqual(just(1))

	expect(run([])).toEqual(nothing())
})
