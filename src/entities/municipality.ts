import { fetcher } from '../fetchers'
import { numericEnglish, numericNepali, range } from '../utils'
type Language = 'en' | 'np'

export interface IMunicipality {
	id: number
	district_id: number
	category_id: number
	name: string
	area_sq_km: string
	website: string
	wards: string
}

/**
 * Class Municipality
 */
export class Municipality {
	private municipalities: IMunicipality[]
	private lang

	/**
	 * Category constructor.
	 * @param string lang
	 * @throws exception
	 */
	constructor(lang: Language = 'en') {
		try {
			this.lang = lang
			this.municipalities = fetcher('municipalities',this.lang)
		} catch (err) {
			throw new Error(`Municipalities of given language doesn't exists.`)
		}
	}

	/**
	 * Get list of all municipalities
	 *
	 * @returns municipalities array
	 */
	public allMunicipalities() {
		return this.municipalities
	}

	/**
	 * Get municipalities by district id
	 *
	 * @param districtId
	 * @returns array of municipalities | null
	 */
	public getMunicipalitiesByDistrict(districtId: number) {
		const municipalities = this.municipalities.filter(
			el => el.district_id === districtId
		)
		return municipalities ? municipalities : null
	}

	/**
	 * Get municipalities by category Id
	 *
	 * @param categoryId
	 * @returns array of municipalities | null
	 */
	public getMunicipalityByCategory(categoryId: number) {
		const municipalities = this.municipalities.filter(
			el => el.category_id === categoryId
		)
		return municipalities ? municipalities : null
	}

	/**
	 * Find municipalities by id
	 *
	 * @param id
	 * @returns municipality | null
	 */
	public find(id: number) {
		const municipality = this.municipalities.find(el => el.id === id)
		return municipality ? municipality : null
	}

	/**
	 * Get municipality with largest area
	 *
	 * @return municipality
	 */
	public largest() {
		const areas = this.municipalities.map(el => el.area_sq_km) // areas are returned in string value
		let numericArea: number[] = []
		if (this.lang === 'np') {
			numericArea = areas.map(el => numericEnglish(el)).map(i => Number(i))
		}

		return this.municipalities[numericArea.indexOf(Math.max(...numericArea))]
	}

	/**
	 * Get municipality with smallest area
	 *
	 * @return municipality
	 */
	public smallest() {
		const areas = this.municipalities.map(el => el.area_sq_km)
		let numericArea: number[] = []
		if (this.lang === 'np') {
			numericArea = areas.map(el => numericEnglish(el)).map(i => Number(i))
		}

		return this.municipalities[numericArea.indexOf(Math.min(...numericArea))]
	}

	/**
	 * Get wards of municipality
	 *
	 * @param id
	 * @return array of wards
	 */
	public wards(id: number) {
		const municipality = this.find(id)

		if (this.lang === 'np' && municipality) {
			const totalWards = parseInt(numericEnglish(municipality.wards))

			let wards = range(1, totalWards)

			return wards.map(i => String(i)).map(el => numericNepali(el))
		}

		return municipality && (range(1, parseInt(municipality.wards))).map(i => String(i))
	}

	/**
	 * Search Municipalities
	 *
	 * @param key
	 * @param value
	 * @return array of municipalities that match with given key
	 */
	public search(key: keyof IMunicipality, value: string | number) {
		return this.municipalities.filter(el =>
			el[key] ? el[key] === value : null
		)
	}
}
