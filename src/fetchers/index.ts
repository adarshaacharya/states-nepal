'use strict'

import fs from 'fs'

type Language = 'en' | 'np'
type Directory = 'districts' | 'provinces' | 'categories' | 'municipalities'

export function fetcher(dir : Directory,lang: Language = 'en') {
	const file = lang === 'np' ? 'np.json' : 'en.json'
	const content = fs.readFileSync(`data/${dir}/${file}`, 'utf-8')
	const json = JSON.parse(content)
	return json
}

