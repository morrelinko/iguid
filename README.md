# IGUID

Incremental Global Unique Identifier

### Installation

```bash
$ npm i iguid

$ yarn add iguid
```

### Usage

```js
import { iguid } from 'iguid'

iguid(); // 1530430595960
iguid(); // 1530430595961
iguid(); // 1530430595962


console.log(
  [...new Array(100)].map(() => ({ id: iguid()}))
)

// [
//   { id: '1530430595963' },
//   { id: '1530430595964' },
//   .....
// ]
```

### Customized Instance

By default iguid uses the the timestamp when the process was started as prefix. This is used to achieve some level of uniqueness when called from multiple node instances. 

However you can spin-off a new instance of the generator passing a custom prefix.

```js
import { createIGuid } from 'iguid'

const uid = createIGuid('c')

console.log(uid()) // c0
console.log(uid()) // c1
console.log(uid()) // c2
console.log(uid()) // c3
```

Pass a falsey value to remove prefix altogether

```js
import { createIGuid } from 'iguid'

const uid = createIGuid(null)

console.log(uid()) // 0
console.log(uid()) // 1
```  

### NOTE: 

Nothing really!

That's all folks :)

### Author

- Laju Morrison <morrelinko@gmail.com>
