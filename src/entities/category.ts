import { fetcher } from '../fetchers'
type Language = 'en' | 'np'

export interface ICategory {
	id: number
	name: string
	short_code: string
}

/**
 * Class Category
 */
export class Category {
	private categories: ICategory[]
	private lang

	/**
	 * Category constructor.
	 * @param string lang
	 * @throws exception
	 */
	constructor(lang: Language = 'en') {
		try {
			this.lang = lang
			this.categories = fetcher('categories', this.lang)
		} catch (err) {
			throw new Error(`Categories of given language doesn't exists.`)
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
	public search(key: keyof ICategory, value: string | number) {
		return this.categories.filter(el => (el[key] ? el[key] === value : null))
	}
}
