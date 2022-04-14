import { just, Maybe, nothing } from '../functors/maybe'
import { Brand } from '../helpers/fn'

export type NonEmptyArray<T> = Brand<T[], 'NonEmptyArray'>

export const parseNonEmptyArrayThrow = <T>(array: T[]): NonEmptyArray<T> => {
	if(array.length === 0) {
		throw new Error('array is empty')
	}
	return array as NonEmptyArray<T>
}

export const parseNonEmptyArrayOrUndefined = <T>(array: T[]): NonEmptyArray<T> | undefined => {
	if(array.length === 0) {
		return undefined
	}
	return array as NonEmptyArray<T>
}

export const parseNonEmptyArray = <T>(array: T[]): Maybe<NonEmptyArray<T>> => {
	if(array.length === 0) {
		return nothing()
	}
	return just(array as NonEmptyArray<T>)
}
