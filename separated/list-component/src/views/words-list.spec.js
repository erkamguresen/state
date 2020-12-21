'use strict';

import jsdom from 'jsdom';
import chai from 'chai';
import { wordsList } from './words-list.js';

// build the DOM properties we will use in testing
const { document, Element } = new jsdom.JSDOM('').window;
// create a global variable named `document` that behaves just like in the browser
// you view function will not work without this
global.document = document;

// declare the `expect` variable for testing
const expect = chai.expect;

describe('wordsList renders an array of strings into an unordered list', () => {
  describe('an empty array becomes an empty list', () => {
    const emptyList = wordsList([]);
    it('should be a DOM element', () => {
      expect(emptyList).to.be.instanceOf(Element);
    });
    it('should have nodeName "UL"', () => {
      expect(emptyList.nodeName).to.equal('UL');
    });
    it('should have 0 children', () => {
      expect(emptyList.childElementCount).to.equal(0);
    });
  });

  describe('it renders a list with "hello!"', () => {
    const helloList = wordsList(['hello!']);
    it('should be a DOM element', () => {
      expect(helloList).to.be.instanceOf(Element);
    });
    it('should have nodeName "UL"', () => {
      expect(helloList.nodeName).to.equal('UL');
    });
    it('should have 1 child', () => {
      expect(helloList.childElementCount).to.equal(1);
    });
    describe('the 1st child', () => {
      const firstChild = helloList.children[0];
      it('should be a DOM element', () => {
        expect(firstChild).to.be.instanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(firstChild.nodeName).to.equal('LI');
      });
      it('should have no children', () => {
        expect(firstChild.childElementCount).to.equal(0);
      });
      it('should have innerHTML "hello!"', () => {
        expect(firstChild.innerHTML).to.equal('hello!');
      });
    });
  });

  describe('it renders a list with "x", "y"', () => {
    const xyzList = wordsList(['x', 'y']);
    it('should be a DOM element', () => {
      expect(xyzList).to.be.instanceOf(Element);
    });
    it('should have nodeName "UL"', () => {
      expect(xyzList.nodeName).to.equal('UL');
    });
    it('should have 2 children', () => {
      expect(xyzList.childElementCount).to.equal(2);
    });
    describe('the 1st child', () => {
      const firstChild = xyzList.children[0];
      it('should be a DOM element', () => {
        expect(firstChild).to.be.instanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(firstChild.nodeName).to.equal('LI');
      });
      it('should have no children', () => {
        expect(firstChild.childElementCount).to.equal(0);
      });
      it('should have innerHTML "x"', () => {
        expect(firstChild.innerHTML).to.equal('x');
      });
    });
    describe('the 2nd child', () => {
      const secondChild = xyzList.children[1];
      it('should be a DOM element', () => {
        expect(secondChild).to.be.instanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(secondChild.nodeName).to.equal('LI');
      });
      it('should have no children', () => {
        expect(secondChild.childElementCount).to.equal(0);
      });
      it('should have innerHTML "y"', () => {
        expect(secondChild.innerHTML).to.equal('y');
      });
    });
  });

  describe('it renders a list with "a", "b","c"', () => {
    const abcList = wordsList(['a', 'b', 'c']);
    it('should be a DOM element', () => {
      expect(abcList).to.be.instanceOf(Element);
    });
    it('should have nodeName "UL"', () => {
      expect(abcList.nodeName).to.equal('UL');
    });
    it('should have 3 children', () => {
      expect(abcList.childElementCount).to.equal(3);
    });
    describe('the 1st child', () => {
      const firstChild = abcList.children[0];
      it('should be a DOM element', () => {
        expect(firstChild).to.be.instanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(firstChild.nodeName).to.equal('LI');
      });
      it('should have no children', () => {
        expect(firstChild.childElementCount).to.equal(0);
      });
      it('should have innerHTML "a"', () => {
        expect(firstChild.innerHTML).to.equal('a');
      });
    });
    describe('the 2nd child', () => {
      const secondChild = abcList.children[1];
      it('should be a DOM element', () => {
        expect(secondChild).to.be.instanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(secondChild.nodeName).to.equal('LI');
      });
      it('should have no children', () => {
        expect(secondChild.childElementCount).to.equal(0);
      });
      it('should have innerHTML "b"', () => {
        expect(secondChild.innerHTML).to.equal('b');
      });
    });
    describe('the 13rd child', () => {
      const thirdChild = abcList.children[2];
      it('should be a DOM element', () => {
        expect(thirdChild).to.be.instanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(thirdChild.nodeName).to.equal('LI');
      });
      it('should have no children', () => {
        expect(thirdChild.childElementCount).to.equal(0);
      });
      it('should have innerHTML "c"', () => {
        expect(thirdChild.innerHTML).to.equal('c');
      });
    });
  });
});
