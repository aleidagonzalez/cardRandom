/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var suits = ["♦", "♠", "♣", "♥"];

  var value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  var cardSuits = suits[Math.floor(Math.random() * 4)];
  var cardValue = value[Math.floor(Math.random() * 13)];
  document.getElementById("topSuit").innerHTML = cardSuits;
  document.getElementById("bottomSuit").innerHTML = cardSuits;
  document.querySelector(".number").innerHTML = cardValue;
};
