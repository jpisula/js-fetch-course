'use strict';
import { getNumberOfTheDay, getNumberFunFact } from "./fetches.js";
import { drawNumber, transformNumber } from "./actions.js";

const formatDate = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) day = `0${day}`;
  month = month < 10 ? `0${month}` : month;

  return `${day}.${month}.${year}`;
}

const startScript = async () => {
  const todayDate = new Date();
  document.getElementById('today-date').innerHTML = formatDate(todayDate);

  const numberOfTheDay = await getNumberOfTheDay();
  document.getElementById('number-of-day').innerHTML = numberOfTheDay;

  const nodFunFact = await getNumberFunFact(numberOfTheDay);
  document.getElementById('nod-fun-fact').innerHTML = nodFunFact;

  const drawNumberButton = document.getElementById('random-number-btn');
  drawNumberButton.addEventListener('click', drawNumber);

  const baseSelect = document.getElementById('base-choose');
  const basesToChoose = [2, 3, 5, 6, 10, 16];
  baseSelect.defaultValue = basesToChoose[0];

  for (const base of basesToChoose) {
    const option = document.createElement('option');
    option.value = base;
    option.innerHTML = base;

    baseSelect.appendChild(option);
  }

  const baseConvertionForm = document.getElementById('your-number-form');
  baseConvertionForm.addEventListener('submit', (event) => transformNumber(event, baseConvertionForm));
}

startScript();
