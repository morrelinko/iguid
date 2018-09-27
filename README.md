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

### Customized Instance

By default iguid uses the the timestamp when the process was started as prefix. This is used to achieve some level of uniqueness when called from multiple node instances. 

However you can spin-off a new instance of the generator passing a custom prefix.

```js
const uid = require('iguid').newUp('c')

console.log(uid()) // c0
console.log(uid()) // c1
console.log(uid()) // c2
console.log(uid()) // c3
```

Pass a falsey value to remove prefix altogether

```js
const uid = require('iguid').newUp(null)

console.log(uid()) // 0
console.log(uid()) // 1
```  

### NOTE: 

If you are using v1 api syntax of this library, 
you don;t need to change anything in code.

The only difference is the ID generated is now prefixed...

That's all folks :)

### Credits

- Laju Morrison <morrelinko@gmail.com>
