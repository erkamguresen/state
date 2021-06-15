/**
 * Appends a DOM element to the document body in a new container.
 * You can optionally pass in a string to use as the container's ID.
 *
 * @param {HTMLElement} component - The rendered element you want to inspect
 * @param {string} testName - The ID you want to use for finding this element in the DOM.
 */
export const appendComponent = (component, testName = '') => {
  if (!component instanceof Element) {
    throw new TypeError('component is not a DOM element');
  }
  if (typeof testName !== 'string') {
    throw new TypeError('testName is not a string');
  }

  const container = document.createElement('div');
  container.appendChild(component);
  if (testName !== '') {
    container.id = testName;
  }

  document.body.appendChild(container);
  document.body.appendChild(document.createElement('hr'));
};
