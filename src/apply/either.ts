import { Fn } from '../helpers/fn'

class Left<E, A> {
	constructor(private readonly error: E) {}

	map<B>(fn: Fn<A, B>): Either<E, B> {
		return this as any
	}

	apBackwards<E2, B>(fnBox: Either<E2, Fn<A, B>>): Either<E | E2, B> {
		return this as any
	}
}

class Right<E, A> {
	constructor(private readonly value: A) {}

	map<B>(fn: Fn<A, B>): Either<E, B> {
		return new Right(fn(this.value))
	}

	apBackwards<E2, B>(fnBox: Either<E2, Fn<A, B>>): Either<E | E2, B> {
		return fnBox.map(fn => fn(this.value))
	}
}

export type Either<E, A> = Left<E, A> | Right<E, A>

export const left = <E>(error: E): Either<E, never> => new Left(error)

export const right = <A>(value: A): Either<never, A> => new Right(value)

export const of = right

export const map = <A, B>(fn: Fn<A, B>) => <E>(either: Either<E, A>): Either<E, B> => either.map(fn)

export const ap = <E, A>(value: Either<E, A>) => <E2, B>(fn: Either<E2, Fn<A, B>>): Either<E | E2, B> =>
	value.apBackwards(fn)
