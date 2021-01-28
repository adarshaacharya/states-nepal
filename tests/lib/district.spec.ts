import { District, IDistricts, Key } from '../../src/lib/district'
import { range } from '../../src/utils'

const npDistricts = new District('np')
const enDistricts = new District('en')

describe('Test District entities', () => {
	it('should test number of district in Nepal', () => {
		expect(npDistricts.allDistricts().length).toBe(77)
		expect(enDistricts.allDistricts().length).toBe(77)
	})

	it('should test find district by Id', () => {
		const correctRange = range(1, 77)
		correctRange.forEach(id => {
			const item = npDistricts.find(id)
			expect(item).not.toBeNull()
		})

		const incorrectRange = range(78, 154)
		incorrectRange.forEach(id => {
			const item = npDistricts.find(id)
			expect(item).toBeNull()
		})
	})

	it('should return the largest district by area', () => {
		const largest = npDistricts.largest()
		expect(largest).toMatchObject({ id: 61, province_id: 6 })
	})

	it('should return the smallest district by area', () => {
		const smallest = npDistricts.smallest()
		expect(smallest).toMatchObject({ id: 23, province_id: 3 })
	})

	it('should search districts that match with given key', () => {
		const keywords = [
			'id',
			'province_id',
			'name',
			'area_sq_km',
			'website',
			'headquarter',
		]
		const districts = npDistricts.allDistricts()

		for (const key of keywords) {
			for (const value of districts) {
				const items = npDistricts.search(
					key as Key,
					value[key as keyof IDistricts]
				)
				expect(items.length).toBeGreaterThanOrEqual(1)
			}
		}
	})
})
