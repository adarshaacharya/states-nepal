type Language = 'en' | 'np'
type Directory = 'districts' | 'provinces' | 'categories' | 'municipalities'

import districtsEn from '../../data/districts/en.json'
import districtsNp from '../../data/districts/np.json'
import provincesEn from '../../data/provinces/en.json'
import provincesNp from '../../data/provinces/np.json'
import categoriesEn from '../../data/categories/en.json'
import categoriesNp from '../../data/categories/np.json'
import municipalitiesEn from '../../data/municipalities/en.json'
import municipalitiesNp from '../../data/municipalities/np.json'
import { IDistrict } from '../entities/district'
import { IProvince } from '../entities/province'
import { IMunicipality } from '../entities/municipality'
import { ICategory } from '../entities/category'

const DATA_MAP = {
	districts: { en: districtsEn, np: districtsNp },
	provinces: { en: provincesEn, np: provincesNp },
	categories: { en: categoriesEn, np: categoriesNp },
	municipalities: { en: municipalitiesEn, np: municipalitiesNp },
} as const

export type DirectoryDataMap = {
	districts: IDistrict[]
	provinces: IProvince[]
	municipalities: IMunicipality[]
	categories: ICategory[]
}

export function fetcher<T extends Directory>(
	dir: T,
	lang: Language = 'en'
): DirectoryDataMap[T] {
	try {
		const data = DATA_MAP[dir][lang] as DirectoryDataMap[T]
		if (!data) {
			throw new Error(
				`Data not found for directory: ${dir} and language: ${lang}`
			)
		}
		return data
	} catch (error) {
		throw new Error(`Failed to load data from source}`)
	}
}
