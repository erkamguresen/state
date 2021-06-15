'use strict';

/**
 * render a paragraph with optional styling
 * @param {string} text - the paragraph text
 * @param {string[]} [classList=[]] - an array of classes to apply
 * @returns {HTMLParagraphElement} a rendered paragraph element
 */
const renderParagraph = (text, classList = []) => {
  // see the last example for a hint
};

describe('renderParagraph: renders a paragraph with optional styling', () => {
  describe('"lorem ipsum", no classes', () => {
    const actual = renderParagraph('lorem ipsum');

    it('has tagName "P"', () => {
      expect(actual.tagName).toEqual('P');
    });
    it('has innerHTML: "lorem ipsum"', () => {
      expect(actual.innerHTML).toEqual('lorem ipsum');
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

  describe('"lorem ipsum", 3 classes', () => {
    const actual = renderParagraph('lorem ipsum', [
      'fancy',
      'hoverable',
      'emphatic',
    ]);

    it('has tagName "P"', () => {
      expect(actual.tagName).toEqual('P');
    });
    it('has innerHTML: "lorem ipsum"', () => {
      expect(actual.innerHTML).toEqual('lorem ipsum');
    });
    it('has classList length 3', () => {
      expect(actual.classList).toHaveLength(3);
    });
    it('has class: "fancy"', () => {
      const hasFancyClass = actual.classList.contains('fancy');
      expect(hasFancyClass).toEqual(true);
    });
    it('has class: "hoverable"', () => {
      const hasHoverableClass = actual.classList.contains('hoverable');
      expect(hasHoverableClass).toEqual(true);
    });
    it('has class: "emphatic"', () => {
      const hasEmphaticClass = actual.classList.contains('emphatic');
      expect(hasEmphaticClass).toEqual(true);
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    console.dir(actual);
  });

  describe('"hello user", 1 class', () => {
    const actual = renderParagraph('hello user', ['friendly']);

    it('has tagName "P"', () => {
      expect(actual.tagName).toEqual('P');
    });
    it('has text: "hello user"', () => {
      expect(actual.innerText).toEqual('hello user');
    });
    it('has classList length 1', () => {
      expect(actual.classList).toHaveLength(1);
    });
    it('has className: "friendly"', () => {
      expect(actual.className).toEqual('friendly');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    console.dir(actual);
  });

  describe('"hello user", no class', () => {
    const actual = renderParagraph('hello user', []);

    it('has tagName "P"', () => {
      expect(actual.tagName).toEqual('P');
    });
    it('has text: "hello user"', () => {
      expect(actual.innerText).toEqual('hello user');
    });
    it('has className: ""', () => {
      expect(actual.className).toEqual('');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    console.dir(actual);
  });
});
