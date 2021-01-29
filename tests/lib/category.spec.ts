import { Category, ICategory } from '../../src/lib/category'
import { range} from '../../src/utils'

const APP_LANG = 'np'
const _category = new Category(APP_LANG)

describe('Test Category entities', () => {
	it('should test number of all categories', () => {
		expect(_category.allCategories().length).toBe(4)
	})

	it('should test find category by Id', () => {
		const correctRange = range(1, 4)
		correctRange.forEach(id => {
			const item = _category.find(id)
			expect(item).not.toBeNull()
		})

		const incorrectRange = range(5, 8)
		incorrectRange.forEach(id => {
			const item = _category.find(id)
			expect(item).toBeNull()
		})
	})

	it('should show category by shortId', () => {
		const correctCodes = ['MC', 'SMC', 'M', 'RM']
		const incorrectCodes = ['AA', 'BB', 'CC', 'DD']

		correctCodes.forEach(code => {
			const item = _category.findByShortCode(code)
			expect(item).not.toBeNull()
		})

		incorrectCodes.forEach(code => {
			const item = _category.findByShortCode(code)
			expect(item).toBeNull()
		})
	})

	it('should search categories that match with given key', () => {
		const keywords = ['id', 'name', 'short_code']
		const allCategories = _category.allCategories()

		for (const key of keywords) {
			for (const value of allCategories) {
				const items = _category.search(
					key as keyof ICategory,
					value[key as keyof ICategory]
                )
				expect(items.length).toBeGreaterThanOrEqual(1)
			}
		}
	})
})
