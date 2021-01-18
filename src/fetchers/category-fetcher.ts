'use strict'

import fs from 'fs'

type Language = 'en' | 'np'

function fetchCategory(lang: Language = 'en') {
	const file = lang === 'np' ? 'np.json' : 'en.json'
	const categories = fs.readFileSync(`data/categories/${file}`, 'utf-8')
	const json = JSON.parse(categories)
	return json
}

export default fetchCategory
