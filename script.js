"use strict";

window.addEventListener("DOMContentLoaded", main);

let guess = 22;
let attempts = 0;

function main() {
    console.log("Hi world...");

    // Tilføj event listeners til knapperne
    document.querySelector('#too-low').addEventListener("click", tooLow);
    document.querySelector('#too-high').addEventListener("click", tooHigh);
    document.querySelector('#correct').addEventListener("click", correct);

    makeGuess();
}

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGuess() {
    guess = generateNumber(1, 100);
    attempts++;

    document.querySelector("#list").insertAdjacentHTML("beforeend", `<li>Er det tallet ${guess}?</li>`);
}

function tooHigh() {
    const previous = guess;
    document.querySelector("#list").insertAdjacentHTML("beforeend", `<li>Mit gæt på ${previous} var for højt.</li>`);
    makeGuess();  // Lav et nyt gæt
    console.log("Guess was too high.");
}

function tooLow() {
    const previous = guess;
    document.querySelector("#list").insertAdjacentHTML("beforeend", `<li>Mit gæt på ${previous} var for lavt.</li>`);
    makeGuess();  // Lav et nyt gæt
    console.log("Guess was too low.");
}

function correct() {
    const previous = guess;
    document.querySelector("#list").insertAdjacentHTML("beforeend", `<li>Mit gæt på ${previous} var korrekt! Jeg gættede det på ${attempts} forsøg.</li>`);
    console.log("Guess was correct.");
    
    disableButtons();
}

