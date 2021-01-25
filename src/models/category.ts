import fetchCategories from '../fetchers/categories-fetcher'
type Language = 'en' | 'np'
type Key = 'id' | 'shortCode' | 'name'

interface ICategories {
	id: number
	name: string
	shortCode: string
}

export class Category {
	private categories: ICategories[]
	private lang

	constructor(lang: Language = 'en') {
		try {
			this.lang = lang
			this.categories = fetchCategories(this.lang)
		} catch (e) {
			throw new Error(e)
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
	 * @returns category | null
	 */
	public find(id: number) {
		const category = this.categories.find(el => el.id === id)
		return category ? category : null
	}

	/**
	 * Find category details by short code
	 *
	 * @param shortCode
	 * @return category|null
	 */
	public findByShortCode(shortCode: string) {
		const category = this.categories.find(el => el.shortCode === shortCode)
		return category ? category : null
	}

	/**
	 * Search Categories
	 *
	 * @param key
	 * @param value
	 * @return array of categories that match with given key
	 */
	public search(key: Key, value: string) {
		return this.categories.filter(el => el[key] === value)
	}
}
