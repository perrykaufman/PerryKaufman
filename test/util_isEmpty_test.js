import {isEmpty} from 'Util';

describe('isEmpty', function() {
  it('handles empty object', function() {
    expect(isEmpty({})).toBe(true);
  })
  it('handles object with properties', function() {
    expect(isEmpty({a:1})).toBe(false);
  });
  it('handles object with different constructor', function() {
    class Foo {
      constructor() {

      }
    }
    const obj = new Foo();
    expect(isEmpty(obj)).toBe(false);
  });
  it('handles object with forged constructor', function() {
    class Foo {
      constructor() {

      }
    }
    const obj = new Foo();
    Foo.prototype.constructor = Object;
    expect(isEmpty(obj)).toBe(false);
  });
  it('handles empty array', function() {
    expect(isEmpty([])).toBe(true);
  })
  it('handles nonempty array', function() {
    expect(isEmpty([1])).not.toBe(true);
  })
  it('handles empty string', function() {
    expect(isEmpty('')).toBe(true);
  })
  it('handles non-empty string', function() {
    expect(isEmpty('1')).not.toBe(true);
  })
});