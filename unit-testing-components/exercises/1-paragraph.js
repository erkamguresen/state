/**
 * render a paragraph with optional styling
 *
 * @param {string} text - the paragraph text
 * @param {string[]} [classList=[]] - an array of classes to apply
 * @returns {HTMLParagraphElement} a rendered paragraph element
 */
export const renderParagraph = (text, classList = []) => {
  const paragraphElement = document.createElement('p');

  paragraphElement.appendChild(document.createTextNode(text));
  // paragraphElement.innerHtml = text;
  // paragraphElement.innerText = text;
  
  paragraphElement.className = classList.join(' '); 

  console.log(paragraphElement.innerHTML , 
    paragraphElement.innerText);
  return paragraphElement;
};
