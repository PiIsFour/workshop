import { User, Address } from './user-immutable'

it('can change name for a user', () => {
	const user = new User('Alice', new Address('78 Piccadilly', 'London'))

	const bob = user.withName('Bob')

	expect(bob).toEqual({
		name: 'Bob',
		address: {
			street: '78 Piccadilly',
			city: 'London',
		},
	})
})

it('can change street for a user', () => {
	const user = new User('Alice', new Address('78 Piccadilly', 'London'))

	const bob = user.correctAddress(toStreet('101 Piccadilly'))

	expect(bob).toEqual({
		name: 'Alice',
		address: {
			street: '101 Piccadilly',
			city: 'London',
		},
	})
})
const toStreet = (street:string) => (address: Address) =>
	address.withStreet(street)

const createFamily = (names: string[], address: Address): User[] => {
	return names.map(name => new User(name, address))
}

it('can change street for one of two user', () => {
	let [alice, bob] = createFamily(['Alice', 'Bob'], new Address('78 Piccadilly', 'London'))

	alice = alice.correctAddress(toStreet('101 Piccadilly'))

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
