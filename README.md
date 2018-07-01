# IGUID

Incremental Global Unique Identifier

### Installation

```bash
$ npm i iguid
```

### Usage

```js
const uid = require('iguid');

uid(); // 1530430595960
uid(); // 1530430595961
uid(); // 1530430595962


console.log(
  [...new Array(100)].map(() => ({ id: uid()}))
)

// [
//   { id: '1530430595963' },
//   { id: '1530430595964' },
//   .....
// ]
```

### NOTE: 

If you are using v1 api syntax of this library, 
you don;t need to change anything in code.

The only difference is the ID generated is now prefixed...

That's all folks :)

### Credits

- Laju Morrison <morrelinko@gmail.com>
