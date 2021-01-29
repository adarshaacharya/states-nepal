import { Category, ICategories, Key } from '../../src/lib/category'
import { range} from '../../src/utils'

const APP_LANG = 'np'
const _categories = new Category(APP_LANG)

describe('Test Category entities', () => {
	it('should test number of all categories', () => {
		expect(_categories.allCategories().length).toBe(4)
	})

	it('should test find category by Id', () => {
		const correctRange = range(1, 4)
		correctRange.forEach(id => {
			const item = _categories.find(id)
			expect(item).not.toBeNull()
		})

		const incorrectRange = range(5, 8)
		incorrectRange.forEach(id => {
			const item = _categories.find(id)
			expect(item).toBeNull()
		})
	})

	it('should show category by shortId', () => {
		const correctCodes = ['MC', 'SMC', 'M', 'RM']
		const incorrectCodes = ['AA', 'BB', 'CC', 'DD']

		correctCodes.forEach(code => {
			const item = _categories.findByShortCode(code)
			expect(item).not.toBeNull()
		})

		incorrectCodes.forEach(code => {
			const item = _categories.findByShortCode(code)
			expect(item).toBeNull()
		})
	})

	it('should search categories that match with given key', () => {
		const keywords = ['id', 'name', 'short_code']
		const allCategories = _categories.allCategories()

		for (const key of keywords) {
			for (const value of allCategories) {
				const items = _categories.search(
					key as Key,
					value[key as keyof ICategories]
                )
				expect(items.length).toBeGreaterThanOrEqual(1)
			}
		}
	})
})
