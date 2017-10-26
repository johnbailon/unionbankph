var request = require('superagent');

function UnionBankPh(options) {
  this.id = options.id;
  this.secret = options.secret;
  this.url = options.url || 'https://api-uat.unionbankph.com/partners/sb/';
}

UnionBankPh.prototype.getAtms = function() {
  return _get(this.url + '/locators/v1/atms', this.id, this.secret);
};

UnionBankPh.prototype.getBranches = function() {
  return _get(this.url + '/locators/v1/branches', this.id, this.secret);
};

UnionBankPh.prototype.getForexRates = function() {
  return _get(this.url + '/forex/v1/rates', this.id, this.secret);
};

UnionBankPh.prototype.getTimeDepositRates = function(code, currency) {
  return _get(this.url + '/td/v1/rates/' + code + '/currency/' + currency, this.id, this.secret);

};

UnionBankPh.prototype.getSavingsAndCurrentRates = function(code, currency) {
  return _get(this.url + '/casa/v1/rates/' + code + '/currency/' + currency, this.id, this.secret);

};

function _get(url, id, secret) {
  return new Promise(function(resolve, reject) {
    request
      .get(url)
      .set('accept', 'application/json')
      .set('x-ibm-client-id', id)
      .set('x-ibm-client-secret', secret)
      .end(function(err, res) {
        if (err) reject(JSON.parse(err.response.text));
        else resolve(JSON.parse(res.text));
      });
    });
}
module.exports = UnionBankPh;
