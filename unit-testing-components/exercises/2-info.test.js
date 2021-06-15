'use strict';

/**
 * render a drop-down info element
 * @param {string} caption - the title of this info drop-down
 * @param {string} mainText - the important information
 * @param {string} [id=''] - the element's id
 * @returns {HTMLDetailsElement}
 */
const renderInfo = (caption, mainText, id = '') => {
  const detailsEl = document.createElement('_');
  _;

  const summaryEl = document.createElement('_');
  _;
  _;

  const pEl = document.createElement('_');
  _;
  _;

  return detailsEl;
};

describe('renderInfo: renders some info under a caption', () => {
  describe('several colors, no id', () => {
    const actual = renderInfo('several colors', 'red, orange, green, blue.');

    it('has tagName: "DETAILS"', () => {
      expect(actual.tagName).toEqual('DETAILS');
    });
    it('has id: ""', () => {
      expect(actual.id).toEqual('');
    });
    it('has childElementCount: 2', () => {
      expect(actual.childElementCount).toEqual(2);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "SUMMARY"', () => {
        expect(actualChild.tagName).toEqual('SUMMARY');
      });
      it('has innerHTML: "several colors"', () => {
        expect(actualChild.innerHTML).toEqual('several colors');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
      console.dir(actualChild);
    });

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "P"', () => {
        expect(actualChild.tagName).toEqual('P');
      });
      it('has innerHTML: "red, orange, green, blue."', () => {
        expect(actualChild.innerHTML).toEqual('red, orange, green, blue.');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
      console.dir(actualChild);
    });
  });

  describe('several colors, id "colors"', () => {
    const actual = renderInfo(
      'several colors',
      'red, orange, green, blue.',
      'colors'
    );

    it('has tagName: "DETAILS"', () => {
      expect(actual.tagName).toEqual('DETAILS');
    });
    it('has id: "colors"', () => {
      expect(actual.id).toEqual('colors');
    });
    it('has childElementCount: 2', () => {
      expect(actual.childElementCount).toEqual(2);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "SUMMARY"', () => {
        expect(actualChild.tagName).toEqual('SUMMARY');
      });
      it('has innerHTML: "several colors"', () => {
        expect(actualChild.innerHTML).toEqual('several colors');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
      console.dir(actualChild);
    });

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "P"', () => {
        expect(actualChild.tagName).toEqual('P');
      });
      it('has innerHTML: "red, orange, green, blue."', () => {
        expect(actualChild.innerHTML).toEqual('red, orange, green, blue.');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
      console.dir(actualChild);
    });
  });

  describe('what is javascript?, id "js"', () => {
    const actual = renderInfo(
      'what is javascript?',
      'a programming language!',
      'js'
    );

    it('has tagName: "DETAILS"', () => {
      expect(actual.tagName).toEqual('DETAILS');
    });
    it('has id: "js"', () => {
      expect(actual).toEqual('id', 'js');
    });
    it('has childElementCount: 2', () => {
      expect(actual.childElementCount).toEqual(2);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "SUMMARY"', () => {
        expect(actualChild.tagName).toEqual('SUMMARY');
      });
      it('has innerHTML: "what is javascript?"', () => {
        expect(actualChild.innerHTML).toEqual('what is javascript?');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
      console.dir(actualChild);
    });

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "P"', () => {
        expect(actualChild.tagName).toEqual('P');
      });
      it('has innerHTML: "a programming language!"', () => {
        expect(actualChild.innerHTML).toEqual('a programming language!');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
      console.dir(actualChild);
    });
  });
});
