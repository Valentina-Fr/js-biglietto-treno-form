/*
Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)  
*/

//Recuperare elementi campo form
var passengerName = document.getElementById("input-name");
var km = document.getElementById("kms");
var age = document.getElementById("age");

//Recuperare elementi campo ticket
var ticketName = document.getElementById("passenger-name");
var ticketPlan = document.getElementById("ticket-plan");
var car = document.getElementById("car");
var train = document.getElementById("train-number");
var price = document.getElementById("ticket-price");
var generateTicket = document.getElementById("ticket-generator");
var ticket = document.getElementById("ticket-field");

//Stampare biglietto
generateTicket.addEventListener("click", function(){

    //Stampare nome passeggero
    ticketName.innerHTML = passengerName.value;

    //Calcolare il prezzo secondo la tariffa ordinaria
    var tempPrice = km.value * 0.21;
    var plan = "Tariffa ordinaria"; 

    //Definire sconti
    var ageValue = age.value;
    if (ageValue === "min") {
        tempPrice *= 0.8;
        plan = "Tariffa minori";
    } else if (ageValue === "over65") {
        tempPrice *= 0.6; 
        plan = "Tariffa over 65";
    } 

    //Prezzo definitivo in due decimali
    var ticketPrice = tempPrice.toFixed(2);
    price.innerHTML = "€ " + ticketPrice;

    //Stampare tariffa applicata
    ticketPlan.innerHTML = plan;
    
    //Ramdomizzare carrozza
    var carRandom = Math.floor(Math.random() * 10) + 1;
    car.innerHTML = carRandom;

    //Randomizzare codice treno
    var trainRandom = Math.floor(Math.random() * (10000 - 9000)) + 9000;
    train.innerHTML = trainRandom;

    //Emettere biglietto
    ticket.classList.remove("hidden");
}
)