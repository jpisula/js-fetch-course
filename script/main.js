/* Use Strict - https://zacznijprogramowac.net/slowniczek-javascript/co-to-jest-use-strict-strict-mode-w-javascript/ */
'use strict';
import { drawNumber } from './actions.js';

const formatDate = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  return `${day}.${month}.${year}`;
};

const getNumberOfTheDay = async () => {
  return await fetch('https://api.math.tools/numbers/nod')
    .then((response) => response.json())
    .then((data) => data.contents.nod.numbers);
};

export const getNumberFunFact = async (number) => {
  return await fetch(
    `http://numbersapi.com/${number}?default=Number+${number}+is+boring+-+we+have+no+fun+facts+about+it.`
  ).then((response) => response.text());
};

const startScript = async () => {
  const todayDate = new Date();
  document.getElementById('today-date').innerHTML = formatDate(todayDate);

  const numberOfTheDay = await getNumberOfTheDay();
  document.getElementById('number-of-day').innerHTML = numberOfTheDay.number;

  const nodFunFact = await getNumberFunFact(numberOfTheDay.number);
  document.querySelector('#nod-fun-fact').innerHTML = nodFunFact;

  const drawNumberButton = document.getElementById('random-number-btn');
  drawNumberButton.addEventListener('click', drawNumber);

  const baseSelect = document.getElementById('base-choose');
  const basesToChoose = [2, 3, 5, 6, 10, 16];

  // const baseSelectOptions = [];

  for (const base of basesToChoose) {
    const option = document.createElement('option');
    option.value = base;
    option.innerHTML = base;

    // baseSelectOptions.push(option);
    baseSelect.appendChild(option);
  }

  // baseSelect.appendChild(baseSelectOptions);
};

startScript();
