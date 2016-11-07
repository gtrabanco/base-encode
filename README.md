
## Example

```javascript
import {Encode} from 'Encode.class';

let enc = new Encode();
let coded:string = enc.encode(1234383299);
console.log(coded);
console.log(enc.decode(coded));
```