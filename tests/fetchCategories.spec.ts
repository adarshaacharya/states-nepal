import fetchCategories from '../src/fetchers/categories-fetcher'

const np = [
	{ id: 1, name: 'महानगरपालिका', short_code: 'MC' },
	{ id: 2, name: 'उपमहानगरपालिका', short_code: 'SMC' },
	{ id: 3, name: 'नगरपालिका ', short_code: 'M' },
	{ id: 4, name: 'गाउपालिका ', short_code: 'RM' },
]

const en = [
	{ id: 1, name: 'Metropolitan City', short_code: 'MC' },
	{ id: 2, name: 'Sub-Metropolitan City', short_code: 'SMC' },
	{ id: 3, name: 'Municipality', short_code: 'M' },
	{ id: 4, name: 'Rural Municipality', short_code: 'RM' },
]

describe('Test fetchCatgeories', () => {
	it('should fetch all nepali categories', () => {
		const npcategories = fetchCategories('np')
		expect(npcategories).toEqual(np)
	})

	it('should fetch all english categories', () => {
		const encategories = fetchCategories('en')
		expect(encategories).toEqual(en)
	})
})
