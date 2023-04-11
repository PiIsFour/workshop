import { Item, GildedRose } from './gilded-rose'

// https://github.com/emilybache/GildedRose-Refactoring-Kata

describe('Gilded Rose', () => {
	it('should foo', () => {
		const gildedRose = new GildedRose([new Item('foo', 0, 0)])
		const items = gildedRose.updateQuality()
		expect(items[0].name).toBe('fixme')
	})
})
