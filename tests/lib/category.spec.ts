import { Category, ICategories, Key } from '../../src/lib/category'

const range = (lb: number, ub: number) =>
	Array.from(new Array(ub), (x, i) => i + lb)

const npCategories = new Category('np')
const enCategories = new Category('en')

describe('Test Category entities', () => {
	it('should test number of all categories', () => {
		expect(npCategories.allCategories().length).toBe(4)
		expect(enCategories.allCategories().length).toBe(4)
	})

	it('should test find category by Id', () => {
		const correctRange = range(1, 4)
		correctRange.forEach(id => {
			const item = npCategories.find(id)
			expect(item).not.toBeNull()
		})

		const incorrectRange = range(5, 8)
		incorrectRange.forEach(id => {
			const item = npCategories.find(id)
			expect(item).toBeNull()
		})
	})

	it('should show category by shortId', () => {
		const correctCodes = ['MC', 'SMC', 'M', 'RM']
		const incorrectCodes = ['AA', 'BB', 'CC', 'DD']

		correctCodes.forEach(code => {
			const item = npCategories.findByShortCode(code)
			expect(item).not.toBeNull()
		})

		incorrectCodes.forEach(code => {
			const item = npCategories.findByShortCode(code)
			expect(item).toBeNull()
		})
	})

	it('should search categories that match with given key', () => {
		const keywords = ['id', 'name', 'short_code']
		const categories = npCategories.allCategories()

		for (const key of keywords) {
			for (const value of categories) {
				const items = npCategories.search(
					key as Key,
					value[key as keyof ICategories]
                )
				expect(items.length).toBeGreaterThanOrEqual(1)
			}
		}
	})
})
