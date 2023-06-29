import { Item, GildedRose } from './gilded-rose'
import data from './gen.json'

// https://github.com/emilybache/GildedRose-Refactoring-Kata

type Data = [string, number, number, string, number, number][]

describe('Gilded Rose', () => {
	it('should foo', () => {
		const gildedRose = new GildedRose([new Item('foo', 0, 0)])
		const items = gildedRose.updateQuality()
		expect(items[0].name).toBe('foo')
	})

	it.each(data as Data)('should (%s, %i, %i)', (name, sellIn, quality, newName, newSellIn, newQuality) => {
		const gildedRose = new GildedRose([new Item(name, sellIn, quality)])
		const items = gildedRose.updateQuality()
		expect(items[0].name).toBe(newName)
		expect(items[0].sellIn).toBe(newSellIn)
		expect(items[0].quality).toBe(newQuality)
	})
})
