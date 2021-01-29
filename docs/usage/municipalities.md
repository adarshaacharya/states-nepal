## Municipalities Usage

### Introduction

By default, english language will be used. In order to use Nepali language, you have to specify while initiating the municipality object.

```js
import { Municipality } from 'states-nepal'

// English language will be selected by default
const municipality = new Municipality()
```

Or, You can specify nepali language :

```js
import { Municipality } from 'states-nepal'

const municipality = new Municipality('np')
```

### Retrieving Municipalities

Once you create instance of Municipality, you can retrieve variety of data.

**1. Get list of all districts**

```js
import { Municipality } from 'states-nepal'

const municipality = new Municipality()

municipality.allMunicipalities()
```

**2. Find municipality details by unique identifier**

```js
import { Municipality } from 'states-nepal'

const municipality = new Municipality()

municipality.find(1)
```

**3. Get array of municipalities by district Id**

```js
import { Municipality } from 'states-nepal'

const municipality = new Municipality()

municipality.getMunicipalitiesByDistrict(7)
```

**4. Get municipality with largest area**

```js
import { Municipality } from 'states-nepal'

const municipality = new Municipality()

municipality.largest()
```

**5. Get municipality with smallest area**

```js
import { Municipality } from 'states-nepal'

const municipality = new Municipality()

municipality.smallest()
```

**6. Get array of municipalities by category Id**

```js
import { Municipality } from 'states-nepal'

const municipality = new Municipality()

municipality.getMunicipalityByCategory(4)
```

**7. Get all wards of a municipality with given municipality Id.**

```js
import { Municipality } from 'states-nepal'

const municipality = new Municipality()

municipality.wards(4)
```

**8. Search municipalities by key and value with exact match option**

```js
import { Municipality } from 'states-nepal'

const municipality = new Municipality()

// examples
district.search('name', 'Chandragiri') // (key, value)
district.search('id', 312)
district.search('district_id', 27)
district.search('category_id', 4)
```

List of options for parameter key:

```js
'id', 'district_id', 'category_id', 'name', 'area_sq_km', 'website', 'wards'
```
