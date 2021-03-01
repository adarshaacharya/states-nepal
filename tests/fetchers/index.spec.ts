import { fetcher } from '../../src/fetchers'

import categories_np from '../../data/categories/np.json'
import categories_en from '../../data/categories/en.json'

import districts_np from '../../data/districts/np.json'
import districts_en from '../../data/districts/en.json'

import municipalities_np from '../../data/municipalities/np.json'
import municipalities_en from '../../data/municipalities/en.json'

import provinces_np from '../../data/provinces/np.json'
import provinces_en from '../../data/provinces/en.json'

describe('Test fetch categories', () => {
	it('should fetch all nepali categories', () => {
		const np = fetcher('categories', 'np')
		expect(np).toEqual(categories_np)
	})

	it('should fetch all english categories', () => {
		const en = fetcher('categories', 'en')
		expect(en).toEqual(categories_en)
	})
})

describe('Test fetch districts', () => {
	it('should fetch all nepali districts', () => {
		const np = fetcher('districts', 'np')
		expect(np).toEqual(districts_np)
	})

	it('should fetch all english districts', () => {
		const en = fetcher('districts', 'en')
		expect(en).toEqual(districts_en)
	})
})

describe('Test fetch municipalities', () => {
	it('should fetch all nepali municipalities', () => {
		const np = fetcher('municipalities', 'np')
		expect(np).toEqual(municipalities_np)
	})

	it('should fetch all english municipalities', () => {
		const en = fetcher('municipalities', 'en')
		expect(en).toEqual(municipalities_en)
	})
})

describe('Test fetch provinces', () => {
	it('should fetch all nepali provinces', () => {
		const np = fetcher('provinces', 'np')
		expect(np).toEqual(provinces_np)
	})

	it('should fetch all english provinces', () => {
		const en = fetcher('provinces', 'en')
		expect(en).toEqual(provinces_en)
	})
})
