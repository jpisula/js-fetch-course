'use strict';

export const getNumberOfTheDay = async () => {
  return await fetch('https://api.math.tools/numbers/nod').then((response) => response.json()).then((data) => data.contents.nod.numbers.number);
}

export const getNumberFunFact = async (number) => {
  return await fetch(`http://numbersapi.com/${number}?default=Number+${number}+is+boring+-+we+have+no+fun+facts+about+it.`)
    .then((response) => response.text());
}

export const getConvertedNumber = async (number, toBase) => {
  if (number === '') {
    return false;
  }

  return fetch(`https://api.math.tools/numbers/base?number=${number}&from=10&to=${toBase}`)
    .then((response) => response.json())
    .then((data) => data.contents.answer);
}
