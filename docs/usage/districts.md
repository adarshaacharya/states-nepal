## Districts Usage

### Introduction

You can use CommonJS modules or ES modules syntax for importing the District entity.

```js
import { District } from 'states-nepal' // ES6
```

or

```js
const { District } = require('states-nepal') // CommonJS
```

By default, english language will be used. In order to use Nepali language, you have to specify while initiating the district object.

```js
import { District } from 'states-nepal'

// English language will be selected by default
const district = new District()
```

Or, You can specify nepali language :

```js
import { District } from 'states-nepal'

const district = new District('np')
```

### Retrieving Districts

Once you create instance of District, you can retrieve variety of data.

**1. Get list of all districts**

```js
import { District } from 'states-nepal'

const district = new District()

district.allDistricts()
```

**2. Find district details by unique identifier**

```js
import { District } from 'states-nepal'

const district = new District()

district.find(1)
```

**3. Get array of districts by province Id**

```js
import { District } from 'states-nepal'

const district = new District()

district.getDistrictsByProvince(2)
```

**4. Get district with largest area**

```js
import { District } from 'states-nepal'

const district = new District()

district.largest()
```

**5. Get district with smallest area**

```js
import { District } from 'states-nepal'

const district = new District()

district.smallest()
```

**6. Get array of districts with municipalities (having wards no.)**

```js
import { District } from 'states-nepal'

const district = new District()

district.getDistrictsWithMunicipalities()
```

**7. Search districts by key and value with exact match option**

```js
import { District } from 'states-nepal'

const district = new District()

// examples
district.search('name', 'Arghakhanchi') // (key, value)
district.search('id', 38)
district.search('headquarter', 'Tamghas')
```

List of options for parameter key:

```js
'id', 'province_id', 'name', 'area_sq_km', 'website', 'headquarter'
```
