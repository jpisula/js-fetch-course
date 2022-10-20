'use strict';
import { getNumberFunFact, getConvertedNumber } from './fetches.js';

export const drawNumber = async (e) => {
  e.preventDefault();
  
  const randomNumber = Math.floor(Math.random() * 1000);

  const numberParagraph = document.createElement('p');
  numberParagraph.innerHTML = `Nowa liczba: ${randomNumber}`;

  const numberFunFact = await getNumberFunFact(randomNumber);

  const funFactSpan = document.createElement('span');
  funFactSpan.innerHTML = numberFunFact;

      const funFactParagraph = document.createElement('p');
  funFactParagraph.appendChild(funFactSpan);

  const resultBox = document.getElementById('random-number-result');
  resultBox.innerHTML = '';
  resultBox.appendChild(numberParagraph);
  resultBox.appendChild(funFactParagraph);
}

export const transformNumber = async (event, form) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  const { yourNumber, baseChoose } = data;

  const convertedNumber = await getConvertedNumber(yourNumber, baseChoose);

  const resultParagraph = document.getElementById('number-base-result');
  resultParagraph.innerHTML = convertedNumber 
    ? `Twoja liczba w zapisie ${baseChoose}: ${convertedNumber}`
    : 'Wpisz jakąś liczbę.';
}