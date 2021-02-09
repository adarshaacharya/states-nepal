import { Key, Province } from '../../src/entities/province'
import { range } from '../../src/utils'

const APP_LANG = 'np'
const _province = new Province(APP_LANG)

describe('Test province entities', () => {
	it('should test number of provinces in Nepal', () => {
		expect(_province.allProvinces().length).toBe(7)
	})

	it('should test find province by Id', () => {
		const correctRange = range(1, 7)
		correctRange.forEach(id => {
			const item = _province.find(id)
			expect(item).not.toBeNull()
		})

		const incorrectRange = range(8, 15)
		incorrectRange.forEach(id => {
			const item = _province.find(id)
			expect(item).toBeNull()
		})
	})

	it('should return the largest province by area', () => {
		const largest = _province.largest()
		expect(largest).toMatchObject({ id: 6 })
	})

	it('should return the smallest province by area', () => {
		const smallest = _province.smallest()
		expect(smallest).toMatchObject({ id: 2 })
	})

	it('should test if districts are correctly loaded with provinces', () => {
		const provincesWithDistricts = _province.getProvincesWithDistricts()

		provincesWithDistricts.map(item => {
			expect(item.districts.length).toBeGreaterThanOrEqual(1)
		})
	})

	it('should search provinces that match with given key', () => {
		const keywords = ['id', 'name', 'area_sq_km', 'website', 'headquarter']
		const allProvinces = _province.allProvinces()

		for (const key of keywords) {
			for (const value of allProvinces) {
				const items = _province.search(key as Key, value[key as Key])
				expect(items.length).toBeGreaterThanOrEqual(1)
			}
		}
	})
})
