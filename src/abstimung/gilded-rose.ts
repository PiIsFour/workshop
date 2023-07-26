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

interface Updater {
	update: () => void
}

export class GildedRose {
	items: Array<Item>

	constructor(items = [] as Array<Item>) {
		this.items = items
	}

	getUpdater(item: Item): Updater {
		switch (item.name) {
			case 'Aged Brie':
				return new AgedBrieUpdater(item)
			case 'Backstage passes to a TAFKAL80ETC concert':
				return new BackstagePassUpdater(item)
			case 'Sulfuras, Hand of Ragnaros':
				return new SulfurasUpdater(item)
			default:
				return new NormalItemUpdater(item)
		}
	}

	updateItemQuality(item: Item) {
		return this.getUpdater(item).update()
	}

	updateQuality() {
		for(const item of this.items) {
			this.updateItemQuality(item)
		}

		return this.items
	}
}

class AgedBrieUpdater implements Updater { // TODO: maybe explore what a base class adds here
	constructor(private item: Item) {}
	update() {
		if(this.item.quality < 50) {
			this.item.quality = this.item.quality + 1
		}
		this.item.sellIn = this.item.sellIn - 1
		if(this.item.sellIn < 0) {
			if(this.item.quality < 50) {
				this.item.quality = this.item.quality + 1
			}
		}
	}
}

class BackstagePassUpdater {
	constructor(private item: Item) {}
	update() {
		if(this.item.quality < 50) {
			this.item.quality = this.item.quality + 1
			if(this.item.sellIn < 11) {
				if(this.item.quality < 50) {
					this.item.quality = this.item.quality + 1
				}
			}
			if(this.item.sellIn < 6) {
				if(this.item.quality < 50) {
					this.item.quality = this.item.quality + 1
				}
			}
		}
		this.item.sellIn = this.item.sellIn - 1
		if(this.item.sellIn < 0) {
			this.item.quality = this.item.quality - this.item.quality
		}
	}
}

class SulfurasUpdater {
	constructor(item: Item) {}
	update() {
		// TODO: Remove
	}
}

class NormalItemUpdater {
	constructor(private item: Item) {}
	update() {
		if(this.item.quality > 0) {
			this.item.quality = this.item.quality - 1
		}
		this.item.sellIn = this.item.sellIn - 1
		if(this.item.sellIn < 0) {
			if(this.item.quality > 0) {
				this.item.quality = this.item.quality - 1
			}
		}
	}
}
