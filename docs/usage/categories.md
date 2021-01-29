## Categories Usage

### Introduction

By default, english language will be used. In order to use Nepali language, you have to specify while initiating the category object.

```js
import { Category } from 'states-nepal'

// English language will be selected by default
const category = new Category()
```

Or, You can specify nepali language :

```js
import { Category } from 'states-nepal'

const category = new Category('np')
```



### Retrieving Categories

Once create instance of Category, you can retrieve variety of data.

**1. Get list of all categories**

```js
import { Category } from 'states-nepal'

const category = new Category()

const categories = category.allCategories()
```

**2. Find category details by unique identifier**

```js
import { Category } from 'states-nepal'

const category = new Category()

category.find(1)
```

**3. Find category details by short code**

```js
import { Category } from 'states-nepal'

const category = new Category()

// Options: MC, SMC, M, RM
category.findByShortCode('MC')
```

**4. Search categories by key and value with exact match option**

```js
import { Category } from 'states-nepal'

const category = new Category()

// examples
category.search('name', 'Municipality') // (key, value)
category.search('id', 1)
category.search('short_code', 'M')
```

List of options for parameter key:

```js
'id' 'name' 'short_code'
```

