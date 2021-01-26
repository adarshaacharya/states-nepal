import fetchCategories from '../fetchers/categories-fetcher'
type Language = 'en' | 'np'
export type Key = 'id' | 'short_code' | 'name'

export interface ICategories {
	id: number
	name: string
	short_code: string
}

export class Category {
	private categories: ICategories[]
	private lang

	constructor(lang: Language = 'en') {
		try {
			this.lang = lang
			this.categories = fetchCategories(this.lang)
		} catch (err) {
			throw new Error(`Categories of given language doesn't exists. ${err}`)
		}
	}

	/**
	 * Get list of all categories
	 *
	 * @returns categories array
	 */
	public allCategories() {
		return this.categories
	}

	/**
	 * Find category deatils by unique id
	 *
	 * @param id
	 * @returns category | null
	 */
	public find(id: number) {
		const category = this.categories.find(el => el.id === id)
		return category ? category : null
	}

	/**
	 * Find category details by short code
	 *
	 * @param short_code
	 * @return category | null
	 */
	public findByShortCode(short_code: string) {
		const category = this.categories.find(el => el.short_code === short_code)
		return category ? category : null
	}

	/**
	 * Search Categories
	 *
	 * @param key
	 * @param value 
	 * @return array of categories that match with given key
	 */
	public search(key: Key, value: string | number) {
		return this.categories.filter(el => (el[key] ? el[key] === value : null))
	}
}
