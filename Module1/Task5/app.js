"use strict";

const promptLabel = "введите имя страны";
let inputCountry = prompt(promptLabel);

const inLowerCase = inputCountry.toLowerCase();

const china = 100;

const chile = 250;

const australia = 170;

const india = 80;

const jamaica = 120;

const firstCountry = "china";
const secondCountry = "chile";
const thirdCountry = "australia";
const fourthCountry = "india";
const fifthCountry = "jamaica";

let message;

switch (inLowerCase) {
  case firstCountry:
    message = `Доставка в ${firstCountry} будет стоить ${china} кредитов`;
    break;

  case secondCountry:
    message = `Доставка в ${secondCountry} будет стоить ${chile} кредитов`;
    break;

  case thirdCountry:
    message = `Доставка в ${thirdCountry} будет стоить ${australia} кредитов`;
    break;

  case fourthCountry:
    message = `Доставка в ${fourthCountry} будет стоить ${india} кредитов`;
    break;

  case fifthCountry:
    messasge = `Доставка в ${fifthCountry} будет стоить ${jamaica} кредитов`;

  default:
    alert("В вашей стране доставка не доступна");
}

console.log(message);
