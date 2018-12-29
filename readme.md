## safe-s3-key

### Pupose

Given a string, return a string that can be safely used as an S3 key.

AWS S3 prohibits the use of certain special characters. This package strips unsafe characters.

### Installation

```bash
npm i safe-s3-key
```

### Usage

```js
require('safe-s3-key')('foo&$@=;:+ ,?bar')
// => foobar
```
