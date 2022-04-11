import { Fn } from '../helpers/fn'

class Just<T> {
	constructor(private readonly value: T) {}

	map<O>(fn: Fn<T, O>): Maybe<O> {
		return new Just(fn(this.value))
	}

	apBackwards<O>(fn: Maybe<Fn<T, O>>): Maybe<O> {
		return fn.map(fn => fn(this.value))
	}

	chain<O>(fn: Fn<T, Maybe<O>>): Maybe<O> {
		return fn(this.value)
	}

	isJust(): this is Just<T> {
		return true
	}
}

class Nothing<T> {
	map<O>(fn: Fn<T, O>): Maybe<O> {
		return this as any
	}

	apBackwards<O>(fn: Maybe<Fn<T, O>>): Maybe<O> {
		return this as any
	}

	chain<O>(fn: Fn<T, Maybe<O>>): Maybe<O> {
		return this as any
	}

	isJust(): this is Just<T> {
		return false
	}
}

export type Maybe<T> = Just<T> | Nothing<T>

export const just = <T>(value: T): Maybe<T> => new Just(value)
export const nothing = <T>(): Maybe<T> => new Nothing()

export const map = <A, B>(fn: Fn<A, B>) => (maybe: Maybe<A>) => maybe.map(fn)
export const ap = <A>(maybe: Maybe<A>) => <B>(fn: Maybe<Fn<A, B>>) => maybe.apBackwards(fn)
export const chain = <A, B>(fn: Fn<A, Maybe<B>>) => (maybe: Maybe<A>) => maybe.chain(fn)

