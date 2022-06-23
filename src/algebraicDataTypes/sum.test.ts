describe('algebraic data types sum', () => {
	interface Person {
		firstName: string
		lastName: string
		city: string,
	}

	interface Company {
		name: string
		city: string,
	}

	type Customer = Person | Company

	const person: Person = {
		firstName: 'Rie',
		lastName: 'Takahashi',
		city: 'Tokyo',
	}

	const company: Company = {
		name: 'KSC',
		city: 'Bad Nauheim',
	}

	//#region getCity
	const getCity = (c: Customer) => {
		return c.city
	}

	it('greets a person', () => {
		expect(getCity(person)).toBe('Tokyo')
	})

	it('greets a company', () => {
		expect(getCity(company)).toBe('Bad Nauheim')
	})
	//#endregion

	//#region greet
	const isPerson = (c: Customer): c is Person => {
		return 'firstName' in c
	}

	const greet = (abc: {customer: Customer}) => {
		if(isPerson(abc.customer)) {
			return `Hello ${ abc.customer.firstName }`
		} else {
			return `Hello ${ abc.customer.name }`
		}
	}

	it('greets a person', () => {
		expect(greet({ customer: person })).toBe('Hello Rie')
	})

	it('greets a company', () => {
		expect(greet({ customer: company })).toBe('Hello KSC')
	})
	//#endregion
})
