# unionbankph
Javascript client for Union Bank PH Developer API

## install
`npm install --save unionbankph`

## use
```javascript
var UnionBankPh = require('unionbankph');
var ub = new UnionBankPh({id: 'xxx', secret: 'xxx' }); //get from https://developer.unionbankph.com

ub.getSavingsAndCurrentRates('SAREG', 'PHP').then(function(res) {
  console.log(res[0].beginAmount);
}).catch(console.error);
```
