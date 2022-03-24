import { User, Address } from './user'

it('can change street for a user', () => {
	const user = new User('Alice', new Address('78 Piccadilly', 'London'))

	user.address.street = '101 Piccadilly'

	expect(user).toEqual({
		name: 'Alice',
		address: {
			street: '101 Piccadilly',
			city: 'London',
		},
	})
})

const createFamily = (names: string[], address: Address): User[] => {
	return names.map(name => new User(name, address))
}

xit('can change street for one of two user', () => {
	const [alice, bob] = createFamily(['Alice', 'Bob'], new Address('78 Piccadilly', 'London'))

	alice.address.street = '101 Piccadilly'

	expect(alice).toEqual({
		name: 'Alice',
		address: {
			street: '101 Piccadilly',
			city: 'London',
		},
	})

	expect(bob).toEqual({
		name: 'Bob',
		address: {
			street: '78 Piccadilly',
			city: 'London',
		},
	})
})

