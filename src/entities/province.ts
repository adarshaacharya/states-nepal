import { fetcher } from '../fetchers'
import { numericEnglish } from '../utils'
import { District, IDistrict } from './district'
import { Municipality } from './municipality'
type Language = 'en' | 'np'
export type Key = 'id' | 'name' | 'area_sq_km' | 'website' | 'headquarter'

export interface IProvince {
	id: number
	name: string
	area_sq_km: string
	website: string
	headquarter: string
	districts?: IDistrict[]
}

/**
 * Class Province
 */
export class Province {
	private provinces: IProvince[]
	private lang

	/**
	 * Province constructor.
	 * @param string lang
	 * @throws exception
	 */
	constructor(lang: Language = 'en') {
		try {
			this.lang = lang
			this.provinces = fetcher('provinces', this.lang)
		} catch (err) {
			throw new Error(`Province of given language doesn't exists.`)
		}
	}

	/**
	 * Get list of all provinces
	 *
	 * @returns provinces array
	 */
	public allProvinces() {
		return this.provinces
	}

	/**
	 * Find province deatils by unique id
	 *
	 * @param id
	 * @returns province | null
	 */
	public find(id: number) {
		const province = this.provinces.find(el => el.id === id)
		return province ? province : null
	}

	/**
	 * Get province with largest area
	 *
	 * @return province
	 */
	public largest() {
		const areas = this.provinces.map(el => el.area_sq_km) // areas are returned in string value
		let numericArea: number[] = []
		if (this.lang === 'np') {
			numericArea = areas.map(el => numericEnglish(el)).map(i => Number(i))
		}

		return this.provinces[numericArea.indexOf(Math.max(...numericArea))]
	}

	/**
	 * Get province with smallest area
	 *
	 * @return province
	 */
	public smallest() {
		const areas = this.provinces.map(el => el.area_sq_km)
		let numericArea: number[] = []
		if (this.lang === 'np') {
			numericArea = areas.map(el => numericEnglish(el)).map(i => Number(i))
		}

		return this.provinces[numericArea.indexOf(Math.min(...numericArea))]
	}

	/**
	 * Get provinces with districts
	 *
	 * @return array of provinces with districts
	 */

	public getProvincesWithDistricts() {
		const district = new District(this.lang)
		const provinces = this.provinces

		return provinces.map(provinceItem => ({
			...provinceItem,
			districts: district.getDistrictsByProvince(provinceItem.id),
		}))
	}

	/**
	 * Get provinces with districts with its municipalities
	 *
	 * @return array of provinces
	 */
	public getProvincesWithDistrictsWithMunicipalities() {
		const district = new District(this.lang)
		const municipality = new Municipality(this.lang)

		const provinces = this.provinces

		return provinces.map(provinceItem => ({
			...provinceItem,
			districts: district
				.getDistrictsByProvince(provinceItem.id)
				.map(districtItem => ({
					...districtItem,
					municipalities: municipality
						.getMunicipalitiesByDistrict(districtItem.id)
						?.map(municipalityItem => ({
							...municipalityItem,
							wards: municipality.wards(municipalityItem.id),
						})),
				})),
		}))
	}

	/**
	 * Search provinces
	 *
	 * @param key
	 * @param value
	 * @return array of provinces that match with given key
	 */
	public search(key: Key, value: string | number) {
		return this.provinces.filter(el => (el[key] ? el[key] === value : null))
	}
}
