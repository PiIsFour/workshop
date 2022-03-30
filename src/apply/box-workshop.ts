import { Fn } from '../helpers/fn'

export class Box<T> {
	constructor(private readonly content: T) {}

	map<O>(transformFunction: Fn<T, O>): Box<O> {
		return new Box(transformFunction(this.content))
	}
}

export const box = <T>(content: T) => new Box(content)

export const map = <A, B>(fn: Fn<A, B>) => (box: Box<A>) => box.map(fn)
