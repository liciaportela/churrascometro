/*INSTRUÇÕES PARA O PROJETO
Carne: 400gr por pessoa  + de 6h - 650gr.
Cerveja: 1200ml por pessoa + 6h - 2000ml.
Refrigerante/água: 1000ml por pessoa + 6h - 1500ml.
Crianças valem por 0,5.
*/

let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputTime = document.getElementById("time");

let result = document.getElementById("result");

function calculate() {
    let adults = inputAdults.value;
    let kids = inputKids.value;
    let time = inputTime.value;

    let totalAmountMeat = meatPP(time) * adults + (meatPP(time) / 2 * kids);
    let totalAmountBeer = beerPP(time) * adults;
    let totalAmountDrink = drinkPP(time) * adults + (drinkPP(time) / 2 * kids);

    result.innerHTML = `<p>${totalAmountMeat / 1000}kg de carne</p>`;
    result.innerHTML += `<p>${Math.ceil(totalAmountBeer / 355)} latas de cervejas </p>`; // arredonda a quantidade para mais
    result.innerHTML += `<p>${Math.ceil(totalAmountDrink / 2000)} garrafas de bebidas</p>`;
}

function meatPP(time) {
    let meat = 400;
    if (time >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function beerPP(time) {
    let meat = 400;
    if (time >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function drinkPP(time) {
    let meat = 400;
    if (time >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}