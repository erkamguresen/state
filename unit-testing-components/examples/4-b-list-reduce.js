/**
 * renders an array of strings into an ordered list
 *
 * @param {string[]} arr - the array of strings to render
 * @param {number} startNum - starting index for the list
 * @returns {HTMLOListElement} the rendered list
 */
export const renderListReduce = (arr, startNum) => {
  const renderLi = item => {
    const liEl = document.createElement('li');
    liEl.innerText = item;
    return liEl;
  };
  const appendLi = (list, nextLi) => {
    list.appendChild(nextLi);
    return list;
  };
  const olEl = arr.map(renderLi).reduce(appendLi, document.createElement('ol'));

  olEl.start = startNum;

  return olEl;
};
