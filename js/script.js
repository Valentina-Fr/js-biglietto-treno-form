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

