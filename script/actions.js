'use strict';
import { getNumberFunFact } from './main.js';

export const drawNumber = async () => {
  const randomNumber = Math.floor(Math.random() * 777);
  const resultBox = document.getElementById('random-number-result');

  // <p>Nowa liczba: <span id="new-random-number"></span></p>
  // <p>Ciekawostka: <span id="new-random-fun-fact"></span></p>

  const numberParagraph = document.createElement('p');
  numberParagraph.innerHTML = `Nowa liczba: ${randomNumber}`;

  const numberFunFact = await getNumberFunFact(randomNumber);

  const funFactSpan = document.createElement('span');
  funFactSpan.innerHTML = numberFunFact;

  const funFactParagraph = document.createElement('p');
  funFactParagraph.innerHTML = 'Ciekawostka: ';
  funFactParagraph.appendChild(funFactSpan);

  resultBox.innerHTML = '';
  resultBox.appendChild(numberParagraph);
  resultBox.appendChild(funFactParagraph);
};
