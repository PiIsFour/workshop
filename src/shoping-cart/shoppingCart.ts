import { Article } from './article'

export class ShoppingCart {
	constructor(private readonly total: number) {
	}

	addItem(article: Article): ShoppingCart {
		const { price } = article
		const newTotal = this.total + price
		return new ShoppingCart(newTotal)
	}

	removeItem(article: Article) {
		return new ShoppingCart(0)
	}

	calculateSummary() {
		return {
			total: this.total,
		}
	}
}
