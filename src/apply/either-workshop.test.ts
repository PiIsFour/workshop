import { Fn } from '../helpers/fn'
import { pipe } from '../helpers/pipe'
import { Either, left, right, of, ap } from './either-workshop'

describe('either', () => {
	it.each([
		{ value: left('error'), expected: left('error') },
		{ value: right(2), expected: right(3) },
	])('can map', ({ value, expected }: {
		value: Either<string, number>,
		expected: Either<string, number>
	}) => {
		const result = value.map(x => x + 1)

		expect(result).toEqual(expected)
	})

	it.each([
		{ value: left('error'), fn: left('error'), expected: left('error') },
		{ value: right(3), fn: left('error'), expected: left('error') },
		{ value: left('error'), fn: right((x: number) => x * 2), expected: left('error') },
		{ value: right(3), fn: right((x: number) => x * 2), expected: right(6) },
	])('can ap', ({ value, fn, expected }: {
		value: Either<string, number>,
		fn: Either<string, Fn<number, number>>,
		expected: Either<string, number>,
	}) => {
		const result = value.apBackwards(fn)

		expect(result).toEqual(expected)
	})

	const getGivenName = (fail = false): Either<null, string> => fail ? left(null) : right('Rie')

	const getFamilyName = (fail = false): Either<Error, string> => fail ? left(new Error('no last name')) : right('Takahashi')

	const fullName = (familyName: string) => (givenName: string) => `${ familyName } ${ givenName }`

	it('use case', () => {
		const result = pipe(
			fullName,
			of,
			ap(getFamilyName()),
			ap(getGivenName()),
		)

		expect(result).toEqual(right('Takahashi Rie'))
	})
})
