import { just, Maybe, nothing } from './maybe'

class MyArray<T> {
	constructor(private readonly array: T[]) {}

	map<O>(fn: (value: T) => O): MyArray<O> {
		return new MyArray(this.array.map(fn))
	}

	first(): Maybe<T> {
		if(this.array.length === 0) {
			return nothing()
		}
		return just(this.array[0])
	}
}

export const myArray = <T>(array: T[]) => new MyArray(array)
