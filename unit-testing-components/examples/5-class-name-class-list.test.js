'use strict';

/**
 * this function renders text into a DOM header with the given level
 * it will throw an error if the level is not in the range 1 -> 6
 * you can optionally assign multiple class names to your element
 * @param {number} level - what header level to render
 * @param {string} text - the text to render into the header
 * @param {string[]} [classList=[]] - an array of class names
 * @returns {HTMLHeadingElement} a rendered header element
 */
const renderHeader = (level, text, classList = []) => {
  if (level < 1 || 6 < level) {
    throw new RangeError('level must be in range: 1 -> 6');
  }

  const headerEl = document.createElement(`h${level}`);
  headerEl.innerHTML = text;
  for (const className of classList) {
    headerEl.classList.add(className);
  }
  return headerEl;
};

describe('renderHeader: renders DOM headers of different levels and classes', () => {
  describe('an H3 with text: "hello", and no classes', () => {
    const actual = renderHeader(3, 'hello');
    it('has tagName "H3"', () => {
      expect(actual.tagName).toEqual('H3');
    });
    it('has innerHTML: "hello"', () => {
      expect(actual.innerHTML).toEqual('hello');
    });
    it('has classList length 0', () => {
      expect(actual.classList.length).toEqual(0);
    });
    it('has className: ""', () => {
      expect(actual.className).toEqual('');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    console.dir(actual);
  });
  describe('an H1 with text: "good bye", and two classes', () => {
    const actual = renderHeader(1, 'good bye', ['fancy', 'hover-left']);
    it('has tagName "H1"', () => {
      expect(actual.tagName).toEqual('H1');
    });
    it('has innerHTML: "good bye"', () => {
      expect(actual.innerHTML).toEqual('good bye');
    });
    it('has classList length 2', () => {
      expect(actual.classList.length).toEqual(2);
    });
    it('have class: "fancy"', () => {
      const hasFancyClass = actual.classList.contains('fancy');
      expect(hasFancyClass).toEqual(true);
    });
    it('have class: "hover-left"', () => {
      const hasHoverLeftClass = actual.classList.contains('hover-left');
      expect(hasHoverLeftClass).toEqual(true);
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
