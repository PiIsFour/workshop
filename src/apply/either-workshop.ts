import { Fn } from '../helpers/fn'

class Left<E, A> {
	constructor(private readonly error: E) {}

	map<B>(fn: Fn<A, B>): Either<E, B> {
		return this as any
	}
}

class Right<E, A> {
	constructor(private readonly value: A) {}

	map<B>(fn: Fn<A, B>): Either<E, B> {
		return new Right(fn(this.value))
	}
}

export type Either<E, A> = Left<E, A> | Right<E, A>

export const left = <E>(error: E): Either<E, never> => new Left(error)

export const right = <A>(value: A): Either<never, A> => new Right(value)

export const of = right

export const map = <A, B>(fn: Fn<A, B>) => <E>(either: Either<E, A>): Either<E, B> => either.map(fn)
