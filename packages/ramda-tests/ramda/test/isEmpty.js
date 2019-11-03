const eq = require('./shared/eq')
const R = require('../../../../../rambda/dist/rambda.js')

describe('isEmpty', () => {
  it('returns false for null', () => {
    eq(R.isEmpty(null), false)
  })

  it('returns false for undefined', () => {
    eq(R.isEmpty(undefined), false)
  })

  it('returns true for empty string', () => {
    eq(R.isEmpty(''), true)
    eq(R.isEmpty(' '), false)
  })

  it('returns true for empty array', () => {
    eq(R.isEmpty([]), true)
    eq(R.isEmpty([ [] ]), false)
  })

  it('returns true for empty object', () => {
    eq(R.isEmpty({}), true)
    eq(R.isEmpty({ x : 0 }), false)
  })

  it('returns true for empty arguments object', () => {
    eq(
      R.isEmpty(
        (function(){
          return arguments
        })()
      ),
      true
    )
    eq(
      R.isEmpty(
        (function(){
          return arguments
        })(0)
      ),
      false
    )
  })

  it('returns false for every other value', () => {
    eq(R.isEmpty(0), false)
    eq(R.isEmpty(NaN), false)
    eq(R.isEmpty([ '' ]), false)
  })
})
describe('isEmpty', () => {
  it('returns false for null', () => {})

  it('returns false for undefined', () => {
    eq(R.isEmpty(null), false)
    eq(R.isEmpty(undefined), false)
    eq(R.isEmpty(''), true)
    eq(R.isEmpty(' '), false)
    eq(R.isEmpty([]), true)
    eq(R.isEmpty([ [] ]), false)
    eq(R.isEmpty({}), true)
    eq(R.isEmpty({ x : 0 }), false)
    eq(R.isEmpty(0), false)
    eq(R.isEmpty(NaN), false)
    eq(R.isEmpty([ '' ]), false)
  })

  it('returns true for empty string', () => {})

  it('returns true for empty array', () => {})

  it('returns true for empty typed array', () => {
    eq(R.isEmpty(Uint8Array.from('')), true)
    eq(R.isEmpty(Float32Array.from('')), true)
    eq(R.isEmpty(new Float32Array([])), true)
    eq(R.isEmpty(Uint8Array.from('1')), false)
    eq(R.isEmpty(Float32Array.from('1')), false)
    eq(R.isEmpty(new Float32Array([ 1 ])), false)
  })

  it('returns true for empty object', () => {})

  it('returns true for empty arguments object', () => {
    eq(
      R.isEmpty(
        (function(){
          return arguments
        })()
      ),
      true
    )
    eq(
      R.isEmpty(
        (function(){
          return arguments
        })(0)
      ),
      false
    )
  })

  it('returns false for every other value', () => {
    eq(R.isEmpty(0), false)
    eq(R.isEmpty(NaN), false)
    eq(R.isEmpty([ '' ]), false)
  })
})
