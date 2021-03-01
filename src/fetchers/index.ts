import fs from 'fs'
import path from 'path'

type Language = 'en' | 'np'
type Directory = 'districts' | 'provinces' | 'categories' | 'municipalities'

export function fetcher(dir: Directory, lang: Language = 'en') {
	try {
		const file = lang === 'np' ? 'np.json' : 'en.json'
		const jsonPath = path.join(__dirname, `../../data/${dir}/${file}`)
		const content = fs.readFileSync(jsonPath, 'utf-8')
		return JSON.parse(content)
	} catch (error) {
		throw new Error(`Failed to load  data from source`)
	}
}
