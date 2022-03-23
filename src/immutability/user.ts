export class Address {
	street: string
	city: string

	constructor(street: string, city: string) {
		this.street = street
		this.city = city
	}
}

export class User {
	name: string
	address: Address

	constructor(name: string, address: Address) {
		this.name = name
		this.address = address
	}
}
