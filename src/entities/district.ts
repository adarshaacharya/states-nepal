import { fetcher } from '../fetchers'
import { numericEnglish } from '../utils'
import { IMunicipality, Municipality } from './municipality'

type Language = 'en' | 'np'

export interface IDistrict {
	id: number
	province_id: number
	name: string
	area_sq_km: string
	website: string
	headquarter: string
	municipalities?: IMunicipality[]
}

export type Key =
	| 'id'
	| 'province_id'
	| 'name'
	| 'area_sq_km'
	| 'website'
	| 'headquarter'

/**
 * Class District
 */
export class District {
	private districts: IDistrict[]
	private lang

	/**
	 * District constructor.
	 * @param string lang
	 * @throws exception
	 */
	constructor(lang: Language = 'en') {
		try {
			this.lang = lang
			this.districts = fetcher('districts', this.lang)
		} catch (err) {
			throw new Error(`Districts of given language doesn't exists. `)
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
	 * Get district with municipalities
	 *
	 * @return array of districts with municipalities
	 */
	public getDistrictsWithMunicipalities() {
		const municipality = new Municipality(this.lang)
		const districts = this.allDistricts()

		const districtsWithMunicipalities = districts.map(districtItem => ({
			...districtItem,
			municipalities: municipality
				.getMunicipalitiesByDistrict(districtItem.id)
				?.map(municipalityItem => ({
					...municipalityItem,
					wards: municipality.wards(municipalityItem.id),
				})),
		}))

		return districtsWithMunicipalities
	}

	/**
	 * Search Districts
	 *
	 * @param key
	 * @param value
	 * @return array of districts that match with given key
	 */
	public search(key: Key, value: string | number) {
		return this.districts.filter(el => (el[key] ? el[key] === value : null))
	}
}
