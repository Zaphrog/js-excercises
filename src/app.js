/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function excuse() {
    let who = ["a ninja", "my ex", "my dog", "a time traveler", "kurt cobain"];
    let what = [
      "destroyed",
      "obliterated",
      "criticized",
      "ate",
      "wrote a song about"
    ];
    let whom = [
      "my car",
      "my motivation",
      "the meaning of it all",
      "me",
      "everything"
    ];
    let when = [
      "today",
      "a few minutes ago",
      "during the weekend",
      "yesterday",
      "...ummmm it will happen in a minute or so"
    ];
    let excuse = "";
    excuse = excuse + who[Math.floor(Math.random() * 5)] + " ";
    excuse = excuse + what[Math.floor(Math.random() * 5)] + " ";
    excuse = excuse + whom[Math.floor(Math.random() * 5)] + " ";
    excuse = excuse + when[Math.floor(Math.random() * 5)];
    return excuse;
  }
  document.querySelector("#generate").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuse();
  });

  console.log("hello!");
};
