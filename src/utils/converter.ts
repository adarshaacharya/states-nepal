const nepaliToEnglish: { [key: string]: string } = {
	'०': '0',
	'१': '1',
	'२': '2',
	'३': '3',
	'४': '4',
	'५': '5',
	'६': '6',
	'७': '7',
	'८': '8',
	'९': '9',
}

const englishToNepali: { [key: string]: string } = {
	'0': '०',
	'1': '१',
	'2': '२',
	'3': '३',
	'4': '४',
	'5': '५',
	'6': '६',
	'7': '७',
	'8': '८',
	'9': '९',
}
/**
 * @description : Convert english numeric value to nepali numeric value
 *
 * @param value
 * @returns mixed
 */
function numericNepali(value: string) {
	return value
		.split('')
		.map(v => englishToNepali[v])
		.join('')
}

/**
 * @description : Convert nepali numeric value to english numeric value
 *
 * @param value
 * @returns mixed
 */
function numericEnglish(value: string) {
	return value
		.split('')
		.map(v => nepaliToEnglish[v])
		.join('')
}
