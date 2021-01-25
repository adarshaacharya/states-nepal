import fetchCategories from '../../src/fetchers/categories-fetcher'

import data_np from '../../data/categories/np.json'
import data_en from '../../data/categories/en.json'


describe('Test fetchCatgeories', () => {
	it('should fetch all nepali categories', () => {
		const npcategories = fetchCategories('np')
		expect(npcategories).toEqual(data_np)
	})

	it('should fetch all english categories', () => {
		const encategories = fetchCategories('en')
		expect(encategories).toEqual(data_en)
	})
})
