import { Article } from './article'
import { ShippingProvider } from './shippingProvider'

interface Summary {
	shippingCost: number,
	total: number,
	tax: number,
}

export interface ICart {
	addItem(item: Article, quantity?: number): ICart
	removeItem(item: Article, quantity?: number): ICart
	calculateSummary(provider: ShippingProvider): Summary
}
