## Provinces Usage

### Introduction

You can use CommonJS modules or ES modules syntax for importing the Province entity.

```js
import { Province } from 'states-nepal' // ES6
```

or

```js
const { Province } = require('states-nepal') // CommonJS
```

By default, english language will be used. In order to use Nepali language, you have to specify while initiating the province object.

```js
import { Province } from 'states-nepal'

// English language will be selected by default
const province = new Province()
```

Or, You can specify nepali language :

```js
import { Province } from 'states-nepal'

const province = new Province('np')
```

### Retrieving Provinces

Once you create instance of Province, you can retrieve variety of data.

**1. Get list of all provinces**

```js
import { Province } from 'states-nepal'

const province = new Province()

province.allMunicipalities()
```

**2. Find province details by unique identifier**

```js
import { Province } from 'states-nepal'

const province = new Province()

province.find(1)
```

**3. Get province with largest area**

```js
import { Province } from 'states-nepal'

const province = new Province()

province.largest()
```

**4. Get province with smallest area**

```js
import { Province } from 'states-nepal'

const province = new Province()

province.smallest()
```

**5. Get all provinces and their districts**

```js
import { Province } from 'states-nepal'

const province = new Province()

province.getProvincesWithDistricts()
```

**6. Search provinces by key and value with exact match option**

```js
import { Province } from 'states-nepal'

const province = new Province()

// examples
district.search('name', 'Gandaki') // (key, value)
district.search('id', 4)
district.search('headquarter', 'Godawari')
```

List of options for parameter key:

```js
'id', 'name', 'area_sq_km', 'website', 'headquarter'
```
