<div align="center">

# hsc

<a href="#">
  <img src="https://img.shields.io/badge/npm-1.0.0-blue">  
</a>

> A small package if you just needed a shorthand for the status code, including their description as JSDoc.
 
</div>

# Resource Heavily Used
- [MDN Web Docs - HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

# Usage
```ts
// CJS
const StatusCode = require('@jaezmien/hsc');

console.log(StatusCode.CLIENT_SUCCESS_200); // 200

// ESM
import StatusCode from '@jaezmien/hsc'

console.log(StatusCode.CLIENT_SUCCESS_200); // 200
```