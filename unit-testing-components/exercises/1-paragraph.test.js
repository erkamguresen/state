"use strict";

const expect = require("chai").expect;

/**
 * render a paragraph with optional styling
 * @param {string} text - the paragraph text
 * @param {string[]} [classList=[]] - an array of classes to apply
 * @returns {HTMLParagraphElement} a rendered paragraph element
 */
const renderParagraph = (text, classList = []) => {
  // see the last example for a hint
};

describe("renderParagraph: renders a paragraph with optional styling", () => {
  describe('"lorem ipsum", no classes', () => {
    const actual = renderParagraph("lorem ipsum");

    it('has tagName "P"', () => {
      expect(actual).to.have.property("tagName", "P");
    });
    it('has innerHTML: "lorem ipsum"', () => {
      expect(actual.innerHTML).to.equal("lorem ipsum");
    });
    it("has classList length 0", () => {
      expect(actual.classList.length).to.equal(0);
    });
    it('has className: ""', () => {
      expect(actual).to.have.property("className", "");
    });
    it("has childElementCount: 0", () => {
      expect(actual).to.have.property("childElementCount", 0);
    });
    console.dir(actual);
  });

  describe('"lorem ipsum", 3 classes', () => {
    const actual = renderParagraph("lorem ipsum", [
      "fancy",
      "hoverable",
      "emphatic",
    ]);

    it('has tagName "P"', () => {
      expect(actual).to.have.property("tagName", "P");
    });
    it('has innerHTML: "lorem ipsum"', () => {
      expect(actual.innerHTML).to.equal("lorem ipsum");
    });
    it("has classList length 3", () => {
      expect(actual.classList).to.have.length(3);
    });
    it('has class: "fancy"', () => {
      const hasFancyClass = actual.classList.contains("fancy");
      expect(hasFancyClass).to.be.true;
    });
    it('has class: "hoverable"', () => {
      const hasHoverableClass = actual.classList.contains("hoverable");
      expect(hasHoverableClass).to.be.true;
    });
    it('has class: "emphatic"', () => {
      const hasEmphaticClass = actual.classList.contains("emphatic");
      expect(hasEmphaticClass).to.be.true;
    });
    it("has childElementCount: 0", () => {
      expect(actual).to.have.property("childElementCount", 0);
    });
    console.dir(actual);
  });

  describe('"hello user", 1 class', () => {
    const actual = renderParagraph("hello user", ["friendly"]);

    it('has tagName "P"', () => {
      expect(actual).to.have.property("tagName", "P");
    });
    it('has text: "hello user"', () => {
      expect(actual).to.have.text("hello user");
    });
    it("has classList length 1", () => {
      expect(actual.classList).to.have.length(1);
    });
    it('has className: "friendly"', () => {
      expect(actual).to.have.property("className", "friendly");
    });
    it("has childElementCount: 0", () => {
      expect(actual).to.have.property("childElementCount", 0);
    });
    console.dir(actual);
  });

  describe('"hello user", no class', () => {
    const actual = renderParagraph("hello user", []);

    it('has tagName "P"', () => {
      expect(actual).to.have.property("tagName", "P");
    });
    it('has text: "hello user"', () => {
      expect(actual).to.have.text("hello user");
    });
    it('has className: ""', () => {
      expect(actual).to.have.property("className", "");
    });
    it("has childElementCount: 0", () => {
      expect(actual).to.have.property("childElementCount", 0);
    });
    console.dir(actual);
  });
});
