/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrOfArrs - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
export const renderGameBoard = arrOfArrs => {
    const gameBoard = document.createElement('table');
    // const tBodyEl = document.createElement('tbody');
    // gameBoard.appendChild(tBodyEl);

    for (let i = 0; i < arrOfArrs.length; i++) {
        const rowArr = arrOfArrs[i];
        const trEl = document.createElement('tr');

        for (let j = 0; j < rowArr.length; j++) {
            const element = rowArr[j];
            const tdEl = document.createElement('td');

            tdEl.innerText = element;

            trEl.appendChild(tdEl);
        }

        gameBoard.appendChild(trEl);
    }



    return gameBoard;
};
