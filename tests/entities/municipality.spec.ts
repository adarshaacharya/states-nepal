import { Municipality, IMunicipality } from '../../src/entities/municipality'
import { numericNepali, range } from '../../src/utils'

const APP_LANG = 'np'
const _municipality = new Municipality(APP_LANG)

describe('Test Municipality entities', () => {
	it('should test number of municipalities in Nepal', () => {
		expect(_municipality.allMunicipalities().length).toBe(753)
	})

	it('should test find municipality by Id', () => {
		const correctRange = range(1, 753)
		correctRange.forEach(id => {
			const item = _municipality.find(id)
			expect(item).not.toBeNull()
		})

		const incorrectRange = range(754, 1000)
		incorrectRange.forEach(id => {
			const item = _municipality.find(id)
			expect(item).toBeNull()
		})
	})

	it('should return the largest municipality by area', () => {
		const largest = _municipality.largest()
		expect(largest).toMatchObject({ id: 617, district_id: 62, category_id: 4 })
	})

	it('should return the smallest municipality by area', () => {
		const smallest = _municipality.smallest()
		expect(smallest).toMatchObject({ id: 274, district_id: 23, category_id: 3 })
	})

	it('should test municipality wards', () => {
		let wards: any = []
		if (APP_LANG === 'np') {
			const wardsRange = range(1, 33)
			wards = wardsRange.map(i => String(i)).map(el => numericNepali(el))
		} else {
			wards = range(1, 33)
		}

		const set = range(1, 753)
		set.forEach(id => {
			const muniWards = _municipality.wards(id)
			const result = muniWards?.filter(x => !wards.includes(x))
			expect(result?.length).toBe(0)
		})
	})

	it('should test municipalities categories', () => {
		const set = range(1, 753)
		set.forEach(id => {
			const municipality = _municipality.find(id)
			const result =
				municipality && range(1, 4).includes(municipality.category_id)
			expect(result).toBeTruthy()
		})
	})

	it('should test municipalities districts', () => {
		const set = range(1, 753)
		set.forEach(id => {
			const municipality = _municipality.find(id)
			const result =
				municipality && range(1, 77).includes(municipality.district_id)
			expect(result).toBeTruthy()
		})
	})

	it('should search municipalities that match with given key', () => {
		const keywords = [
			'id',
			'district_id',
			'category_id',
			'name',
			'area_sq_km',
			'website',
			'wards',
		]
		const allMunicipalities = _municipality.allMunicipalities()

		for (const key of keywords) {
			for (const value of allMunicipalities) {
				const items = _municipality.search(
					key as keyof IMunicipality,
					value[key as keyof IMunicipality]
				)
				expect(items.length).toBeGreaterThanOrEqual(1)
			}
		}
	})
})
