/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Write your code here
let pronoun = ["the", "our"];
let adjective = ["great", "big"];
let noun = ["jogger", "racoon"];

let listForLoop = "";
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjective.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      listForLoop += `
        <li class="list-group-item">
          ${pronoun[i]}${adjective[j]}${noun[k]}.com
        </li>
      `;
    }
  }
}

document.querySelector("#for-loop").innerHTML = listForLoop;
