export class Address {
	readonly street: string
	readonly city: string

	constructor(street: string, city: string) {
		this.street = street
		this.city = city
	}

	withStreet(street: string) {
		return new Address(street, this.city)
	}
}

export class User {
	readonly name: string
	readonly address: Address

	constructor(name: string, address: Address) {
		this.name = name
		this.address = address
	}

	withName(name: string) {
		return new User(name, this.address)
	}

	correctAddress(addressBuilder: (address: Address) => Address) {
		return new User(this.name, addressBuilder(this.address))
	}

	move(addressBuilder: (address: Address) => Address) {
		return new User(this.name, addressBuilder(this.address))
	}
}
