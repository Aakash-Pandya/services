var R = require('../../../../../rambda/dist/rambda')
var eq = require('./shared/eq');


describe('pair', function() {

  it('creates a two-element array', function() {
    eq(R.pair('foo', 'bar'), ['foo', 'bar']);
    eq(R.pair('foo')('bar'), ['foo', 'bar']);
  });

});