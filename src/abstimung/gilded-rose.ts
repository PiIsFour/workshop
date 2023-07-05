export class Item {
	name: string
	sellIn: number
	quality: number

	constructor(name: string, sellIn: number, quality: number) {
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}
}

export class GildedRose {
	items: Array<Item>

	constructor(items = [] as Array<Item>) {
		this.items = items
	}

	updateAgedBrie(item: Item) {
		if(item.quality < 50) {
			item.quality = item.quality + 1
		}
		item.sellIn = item.sellIn - 1
		if(item.sellIn < 0) {
			if(item.quality < 50) {
				item.quality = item.quality + 1
			}
		}
	}

	updateBackstagePasses(item: Item) {
		if(item.quality < 50) {
			item.quality = item.quality + 1
			if(item.sellIn < 11) {
				if(item.quality < 50) {
					item.quality = item.quality + 1
				}
			}
			if(item.sellIn < 6) {
				if(item.quality < 50) {
					item.quality = item.quality + 1
				}
			}
		}
		item.sellIn = item.sellIn - 1
		if(item.sellIn < 0) {
			item.quality = item.quality - item.quality
		}
	}

	updateSulfuras(item: Item) {
		// TODO: Remove
	}

	updateNormalItem(item: Item) {
		if(item.quality > 0) {
			item.quality = item.quality - 1
		}
		item.sellIn = item.sellIn - 1
		if(item.sellIn < 0) {
			if(item.quality > 0) {
				item.quality = item.quality - 1
			}
		}
	}

	updateItemQuality(item: Item) {
		switch (item.name) {
			case 'Aged Brie':
				return this.updateAgedBrie(item)
			case 'Backstage passes to a TAFKAL80ETC concert':
				return this.updateBackstagePasses(item)
			case 'Sulfuras, Hand of Ragnaros':
				return this.updateSulfuras(item)
			default:
				return this.updateNormalItem(item)
		}
	}

	updateQuality() {
		for(const item of this.items) {
			this.updateItemQuality(item)
		}

		return this.items
	}
}

