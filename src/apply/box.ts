import { Fn } from '../helpers/fn'

export class Box<T> {
	constructor(private readonly content: T) {}

	map<O>(transformFunction: Fn<T, O>): Box<O> {
		return new Box(transformFunction(this.content))
	}

	apBackwards<O>(fnBox: Box<Fn<T, O>>): Box<O> {
		return fnBox.map(fn => fn(this.content))
	}
}

export const box = <T>(content: T) => new Box(content)

export const map = <A, B>(fn: Fn<A, B>) => (box: Box<A>) => box.map(fn)

export const ap = <A>(box: Box<A>) => <B>(fnBox: Box<Fn<A, B>>) => box.apBackwards(fnBox)
