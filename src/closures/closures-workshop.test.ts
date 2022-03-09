import { box } from '../functors/box'
import { pipe } from '../helpers/pipe'

import { testFn, createClosure, add } from './closures-workshop'

it('global closure', () => {
	expect(testFn()).toEqual('hello world')
})

it('locally', () => {
	const localFn = createClosure()
	expect(localFn()).toEqual('hello world')
})

it('add', () => {
	const inc = add(1)
	expect(inc(5)).toBe(6)

	expect([10, 20, 30]
		.map(inc)
		.map(add(-5)),
	).toEqual([6, 16, 26])

	expect(box(5)
		.map(inc)
		.map(add(-5)),
	).toEqual(box(1))

	expect(pipe(
		'hello world',
		x => x.length,
		add(5),
	)).toBe(16)
})
