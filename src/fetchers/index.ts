import fs from 'fs'

type Language = 'en' | 'np'
type Directory = 'districts' | 'provinces' | 'categories' | 'municipalities'

export function fetcher(dir: Directory, lang: Language = 'en') {
	try {
		const file = lang === 'np' ? 'np.json' : 'en.json'
		const content = fs.readFileSync(`data/${dir}/${file}`, 'utf-8')
		return JSON.parse(content)
	} catch (error) {
		throw new Error(`Failed to load  ${dir} from source`)
	}
}
