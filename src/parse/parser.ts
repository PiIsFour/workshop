import { just, Maybe, nothing, ap } from '../functors/maybe'
import { Fn } from '../helpers/fn'
import { pipe } from '../helpers/pipe'

export type ParserFn<A, B> = Fn<A, Maybe<B>>
export interface Parser<A, B> {
	(value: A): Maybe<B>
	map<C>(fn: Fn<B, C>): Parser<A, C>
	chain<C>(fn: Parser<B, C>): Parser<A, C>
}

export const parser = <A, B>(parserFn: ParserFn<A, B>): Parser<A, B> => {
	const p = parserFn as Parser<A, B>
	p.map = <C>(fn: Fn<B, C>) => map(fn)(parserFn)
	p.chain = <C>(fn: Parser<B, C>) => chain(fn)(parserFn)
	return p
}

export const map = <B, C>(fn: Fn<B, C>) => <A>(p: ParserFn<A, B>): Parser<A, C> =>
	parser(value => p(value).map(fn))

export const chain = <B, C>(fn: Parser<B, C>) => <A>(p: ParserFn<A, B>): Parser<A, C> =>
	parser(value => p(value).chain(fn))

export const number = parser<unknown, number>(value => {
	if(typeof value !== 'number') {
		return nothing()
	}
	return just(value)
})

export const max = <T extends number = number>(max: number) => parser<number, T>(value => {
	if(value > max) {
		return nothing()
	}
	return just(value as T)
})

export const string = parser<unknown, string>(value => {
	if(typeof value !== 'string') {
		return nothing()
	}
	return just(value)
})

const isObject = <T = Record<string, unknown>>(value: unknown): value is T =>
	typeof value === 'object' && value !== null

export const shape = <T>(parsers: { [K in keyof T]: Parser<unknown, T[K]> }) =>
	parser<unknown, T>(value => {
		if(!isObject<T>(value)) {
			return nothing()
		}

		return Object.keys(parsers)
			.reduce((prev, k) => {
				const key = k as keyof T
				return pipe(
					just((prev: T) => (parsedValue: T[keyof T]) => ({
						...prev,
						[key]: parsedValue,
					})),
					ap(prev),
					ap(parsers[key](value[key])),
				)
			}, just({} as T))
	})
