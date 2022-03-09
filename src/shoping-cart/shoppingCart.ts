import { Article } from './article'

export class ShoppingCart {
	constructor(private readonly articles: Article[] = []) {
	}

	addItem(article: Article): ShoppingCart {
		const newArticles = [...this.articles, article]

		return new ShoppingCart(newArticles)
	}

	removeItem(article: Article) {
		const articleIndex = this.articles.findIndex(x => x.name === article.name)
		if(articleIndex === -1) {
			return this
		}

		const remainingArticles = this.articles.filter((_, index) => articleIndex !== index)

		return new ShoppingCart(remainingArticles)
	}

	private total() {
		return this.articles
			.map(x => x.price)
			.reduce(sum, 0)
	}

	calculateSummary() {
		return {
			total: this.total(),
		}
	}
}

const sum = (a: number, b: number): number => a + b

