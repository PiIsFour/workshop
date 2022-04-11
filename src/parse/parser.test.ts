import { just, nothing } from '../functors/maybe'
import { Brand } from '../helpers/fn'

import { number, string, max, shape } from './parser'

it('can parse a number', () => {
	expect(number(5)).toEqual(just(5))
	expect(number('5')).toEqual(nothing())
})

it('can parse a string', () => {
	expect(string('hello')).toEqual(just('hello'))
	expect(string(-1)).toEqual(nothing())
})

it('can map a parser', () => {
	const parser = string
		.map(x => x.length)

	expect(parser('hello')).toEqual(just(5))
	expect(parser(5)).toEqual(nothing())
})

it('can parse a max of a number', () => {
	type max10 = Brand<number, 'max10'>
	const parser = max<max10>(10)

	expect(parser(1)).toEqual(just(1))
	expect(parser(999)).toEqual(nothing())
})

it('can chain parsers', () => {
	type max10 = Brand<number, 'max10'>
	const parser = number
		.chain(max<max10>(10))

	expect(parser(5)).toEqual(just(5))
	expect(parser(999)).toEqual(nothing())
	expect(parser('wrong')).toEqual(nothing())
})

it('can parse objects', () => {
	type max10 = Brand<number, 'max10'>
	const max10 = number
		.chain(max<max10>(10))

	interface User {
		name: string
		age: number
	}

	const parser = shape<User>({
		name: string,
		age: max10,
	})

	const Alice = {
		name: 'Alice',
		age: 7,
	}
	expect(parser(Alice)).toEqual(just(Alice))

	expect(parser({
		name: 'Bob',
		age: 99,
	})).toEqual(nothing())

	expect(parser({
		name: 'Bob',
		age: '5',
	})).toEqual(nothing())

	expect(parser({
		age: 5,
	})).toEqual(nothing())

	expect(parser('Bob')).toEqual(nothing())
})

it('since shape is a parser itself', () => {
	const parser = shape({
		name: string,
		permissions: shape({
			logins: number,
		}),
	})

	const test = {
		name: 'Hello',
		permissions: {
			logins: 5,
		},
	}
	expect(parser(test)).toEqual(just(test))
})
