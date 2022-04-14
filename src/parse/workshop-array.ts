import { just, Maybe, nothing } from '../functors/maybe'

export type NonEmptyArray<T> = T[] & { __tag: 'NonEmptyArray' }

export const parseOrThrow = <T>(value: T[]): NonEmptyArray<T> => {
	if(value.length === 0) {
		throw new Error('empty array')
	}
	return value as NonEmptyArray<T>
}

export const parse = <T>(value: T[]): Maybe<NonEmptyArray<T>> => {
	if(value.length === 0) {
		return nothing()
	}
	return just(value as NonEmptyArray<T>)
}

