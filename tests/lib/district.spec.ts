import { District } from '../../src/lib/district'
import { range} from '../../src/utils'

const npDistricts = new District('np')
const enDistricts = new District('en')

describe('Test District entities', () => {
	it('should test number of district in Nepal', () => {
		expect(npDistricts.allDistricts().length).toBe(77)
		expect(enDistricts.allDistricts().length).toBe(77)
    })

    it('should test find district by Id', () => {
		const correctRange = range(1, 77)
		correctRange.forEach(id => {
			const item = npDistricts.find(id)
			expect(item).not.toBeNull()
		})

        const incorrectRange = range(78, 154)
		incorrectRange.forEach(id => {
			const item = npDistricts.find(id)
			expect(item).toBeNull()
		})
	})
    

})
