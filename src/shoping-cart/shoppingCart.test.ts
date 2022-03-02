import { ShoppingCart } from './shoppingCart'

describe('shopping cart', () => {
	const testItem = { name: 'test item', price: 10, tax: 0.19, weight: 6 }
	const smallTestItem = { name: 'small test item', price: 1, tax: 0.19, weight: 1 }

	it('empty cart costs nothing', () => {
		const emptyCart = new ShoppingCart(0)
		const summary = emptyCart.calculateSummary()
		expect(summary.total).toBe(0)
	})

	describe('add item', () => {
		it('of value 10 will lead to total of 10', () => {
			const emptyCart = new ShoppingCart(0)
			const cardWithOneItem = emptyCart.addItem(testItem)
			const summary = cardWithOneItem.calculateSummary()
			expect(summary.total).toBe(10)
		})

		it('of value 1 will lead to total of 1', () => {
			const emptyCart = new ShoppingCart(0)
			const cardWithOneItem = emptyCart.addItem(smallTestItem)
			const summary = cardWithOneItem.calculateSummary()
			expect(summary.total).toBe(1)
		})

		it('adding two items will sum up their price', () => {
			const emptyCart = new ShoppingCart(0)
			const cardWithTwoItems = emptyCart
				.addItem(testItem)
				.addItem(smallTestItem)
			const summary = cardWithTwoItems.calculateSummary()
			expect(summary.total).toBe(11)
		})
	})

	describe('remove item', () => {
		it('removing an non existing item does not change the cart', () => {
			const emptyCart = new ShoppingCart(0)
			const removedCard = emptyCart.removeItem(testItem)
			expect(removedCard).toEqual(emptyCart)
		})

		it('adding and removing an item leads to an empty cart', () => {
			const emptyCart = new ShoppingCart(0)
			const removedCard = emptyCart
				.addItem(testItem)
				.removeItem(testItem)

			expect(removedCard).toEqual(emptyCart)
		})
	})
})
