import { GildedRose, Item } from './gilded-rose'
import fs from 'fs'

const run = ([name, sellIn, quality]: readonly [string, number, number]) => {
	const gildedRose = new GildedRose([new Item(name, sellIn, quality)])
	const items = gildedRose.updateQuality()
	return [name, sellIn, quality, items[0].name, items[0].sellIn, items[0].quality]
}

console.log(run(['foo', 0, 0]))

const names = [
	'foo',
	'Aged Brie',
	'Backstage passes to a TAFKAL80ETC concert',
	'Sulfuras, Hand of Ragnaros',
]

const sellIns = [
	-1,
	0,
	1,
	5,
	6,
	10,
	11,
]

const qualities = [
	-1,
	0,
	1,
	25,
	49,
	50,
	80,
	81,
]

const tests = names.flatMap(name => sellIns.flatMap(sellIn => qualities.map(quality => [name, sellIn, quality] as const)))

const data = tests.map(run)

fs.writeFileSync('gen.json', JSON.stringify(data, null, 2))
