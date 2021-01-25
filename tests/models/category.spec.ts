import { Category } from '../../src/models/category'

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
    
    
})
