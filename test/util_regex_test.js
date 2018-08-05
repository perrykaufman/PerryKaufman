import {EXT_RE, PATH_RE} from 'Util';

describe('Util regular expressions', function() {
  describe('EXT_RE', function() {
    it('matches .md extension', function() {
      const path = 'banana/yay.md';
      const result = path.replace(EXT_RE, '');
      const expected = 'banana/yay'
      expect(result).toBe('banana/yay');
    });
    it('matches .html extension', function() {
      const path = 'banana/yay.html';
      const result = path.replace(EXT_RE, '');
      const expected = 'banana/yay';
      expect(result).toBe(expected);
    });
    it('handles no extension', function() {
      const path = '/banana/test'
      const result = path.replace(EXT_RE, '');
      const expected = '/banana/test'
      expect(result).toBe(expected);
    })
  });
  describe('PATH_RE', function() {
    it('matches short path', function() {
      const path = '/';
      const result = path.match(PATH_RE)[0];
      const expected = '/';
      expect(result).toBe(expected);
    });
    it('matches medium path', function() {
      const path = '/banana/yay.html';
      const result = path.match(PATH_RE)[0];
      const expected = '/banana/';
      expect(result).toBe(expected);
    });
    it('matches long path', function() {
      const path = '/tasty/banana/yay.html';
      const result = path.match(PATH_RE)[0];
      const expected = '/tasty/banana/';
      expect(result).toBe(expected);
    });
  });
})