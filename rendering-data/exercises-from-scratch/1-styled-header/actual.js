'use strict';

const actual = (level, text, styling) => {
  const hElement = document.createElement(`h${level}`);

  hElement.innerText = text;

  if (styling !== null && styling !== undefined && styling !== '')
    hElement.className = styling;

  return hElement;
};
