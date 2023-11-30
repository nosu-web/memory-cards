"use strict"
const game = document.getElementById("game");
const playGameBtn = document.getElementById("playGameBtn");

const tableRows = 4;
const tableCols = 4;
const cardSymbols = ["🎉", "❄️", "🎄", "❤️", "🎁", "🎅", "🚀", "🌟"];
let freeSymbols;
let usedSymbols = [];

playGameBtn.addEventListener("click", () => {
  gameStart();
});

/* Функция инициализации игры */
function gameStart() {
  freeSymbols = cardSymbols.slice();
  console.log(freeSymbols);
  usedSymbols = [];

  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }
  let gameTable = createTable(tableRows, tableCols);
  game.appendChild(gameTable);
}

/* Функция создания таблицы */
function createTable(rows, cols) {
  let table = document.createElement("table");
  table.setAttribute("class", "gameField");
  for (let i = 0; i < rows; i++) {
    let tr = table.insertRow(i);
    for (let j = 0; j < cols; j++) {
      let td = tr.insertCell(j);
      td.setAttribute("id", i + '-' + j);
      td.setAttribute("class", "gameCard");
      td.textContent = generateCard();
    }
  }
  return table;
}

/* Функция генерация карточки */
function generateCard() {
  let randomSymbolIndex = Math.floor(Math.random() * freeSymbols.length);
  let randomSymbol = freeSymbols[randomSymbolIndex];
  usedSymbols.push(randomSymbol);
  if (countElement(usedSymbols, randomSymbol) > 1) {
    freeSymbols.splice(randomSymbolIndex, 1);
  }
  return randomSymbol;
}

/* Функция подсчета элемента в массива */
function countElement(array, element) {
  let total = 0;
  for (var el of array) {
    if (el == element) {
      total++;
    }
  }
  return total;
}