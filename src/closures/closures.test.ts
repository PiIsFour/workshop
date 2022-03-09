import { box } from '../functors/box'
import { globalClosure, createLocalClosure, createCounter, add } from './closures'
import { pipe } from '../helpers/pipe'

it('every function is a closure with global', () => {
	expect(globalClosure()).toBe('global test')
})

it('local closure', () => {
	const localClosure = createLocalClosure()
	expect(localClosure()).toBe('local test')
})

it('can hide information', () => {
	const counter = createCounter(0)

	counter.inc()
	counter.inc()

	expect(counter).not.toHaveProperty('count')
	expect(counter.getCount()).toBe(2)
})

it('can add', () => {
	const add5 = add(5)
	expect(add5(20)).toBe(25)

	expect([2, 3, 4]
		.map(add(20)),
	).toEqual([22, 23, 24])

	expect(box(100)
		.map(add(-50)),
	).toEqual(box(50))

	expect(
		pipe(
			'hello world',
			x => x.length,
			add(50),
		),
	).toBe(61)
})
