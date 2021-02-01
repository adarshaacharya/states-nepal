import { fetcher } from '../fetchers'
import { numericEnglish } from '../utils'

type Language = 'en' | 'np'

export interface IDistrict {
	id: number
	province_id: number
	name: string
	area_sq_km: string
	website: string
	headquarter: string
}

/**
 * Class District
 */
export class District {
	private districts: IDistrict[]
	private lang

	/**
	 * Category constructor.
	 * @param string lang
	 * @throws exception
	 */
	constructor(lang: Language = 'en') {
		try {
			this.lang = lang
			this.districts = fetcher('districts',this.lang)
		} catch (err) {
			throw new Error(`Districts of given language doesn't exists. ${err}`)
		}
	}

	/**
	 * Get list of all districts
	 *
	 * @returns districts array
	 */
	public allDistricts() {
		return this.districts
	}

	/**
	 * Find district deatils by unique id
	 *
	 * @param id
	 * @returns district | null
	 */
	public find(id: number) {
		const district = this.districts.find(el => el.id === id)
		return district ? district : null
	}

	/**
	 * Get districts by province id
	 *
	 * @param provinceId
	 * @return array|null
	 */
	public getDistrictsByProvince(provinceId: number) {
		return this.districts.filter(el => el.province_id === provinceId)
	}

	/**
	 * Get district with largest area
	 *
	 * @return district
	 */
	public largest() {
		const areas = this.districts.map(el => el.area_sq_km)
		let numericArea: number[] = []
		if (this.lang === 'np') {
			numericArea = areas.map(el => numericEnglish(el)).map(i => Number(i))
		}

		return this.districts[numericArea.indexOf(Math.max(...numericArea))]
	}

	/**
	 * Get district with smallest area
	 *
	 * @return district
	 */
	public smallest() {
		const areas = this.districts.map(el => el.area_sq_km)
		let numericArea: number[] = []
		if (this.lang === 'np') {
			numericArea = areas.map(el => numericEnglish(el)).map(i => Number(i))
		}

		return this.districts[numericArea.indexOf(Math.min(...numericArea))]
	}

	/**
	 * Search Districts
	 *
	 * @param key
	 * @param value
	 * @return array of districts that match with given key
	 */
	public search(key: keyof IDistrict, value: string | number) {
		return this.districts.filter(el => (el[key] ? el[key] === value : null))
	}
}
