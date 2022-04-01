import { Fn } from '../helpers/fn'

export class Box<T> {
	constructor(private readonly content: T) {}

	map<O>(transformFunction: Fn<T, O>): Box<O> {
		return new Box(transformFunction(this.content))
	}

	apBackwards<O>(transformFunction: Box<Fn<T, O>>): Box<O> {
		return transformFunction.map(fn => fn(this.content))
	}
}

export const box = <T>(content: T) => new Box(content)

export const map = <A, B>(fn: Fn<A, B>) => (box: Box<A>) => box.map(fn)

export const ap = <A>(box: Box<A>) => <B>(fn: Box<Fn<A, B>>) => box.apBackwards(fn)
