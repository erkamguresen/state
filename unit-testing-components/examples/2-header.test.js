'use strict';

/**
 * this function renders text into a DOM header with the given level
 * it will throw an error if the level is not in the range 1 -> 6
 * @param {number} level - what header level to render
 * @param {string} text - the text to render into the header
 * @returns {HTMLHeadingElement} a rendered header element
 */
const renderHeader = (level, text) => {
  if (level < 1 || 6 < level) {
    throw new RangeError('level must be in range: 1 -> 6');
  }

  const headerEl = document.createElement(`h${level}`);
  headerEl.innerHTML = text;
  return headerEl;
};

describe('renderHeader: renders DOM headers of different levels', () => {
  describe('an H3 with text: "hello"', () => {
    // debugger;
    const actual = renderHeader(3, 'hello');
    it('has tagName "H3"', () => {
      expect(actual.tagName).toEqual('H3');
    });
    it('has innerHTML: "hello"', () => {
      expect(actual.innerHTML).toEqual('hello');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    console.dir(actual);
  });
  describe('an H1 with text: "good bye"', () => {
    const actual = renderHeader(1, 'good bye');
    it('has tagName "H1"', () => {
      expect(actual.tagName).toEqual('H1');
    });
    it('has innerHTML: "good bye"', () => {
      expect(actual.innerHTML).toEqual('good bye');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    console.dir(actual);
  });
  describe('does not allow invalid header levels', () => {
    it('throws an error if level is less than 1', () => {
      const shouldThrow = () => renderHeader(0, 'oops!');
      expect(shouldThrow).toThrowError(RangeError);
    });
    it('throws an error if level is greater than 6', () => {
      const shouldThrow = () => renderHeader(7, 'oops!');
      expect(shouldThrow).toThrowError(RangeError);
    });
  });
});
