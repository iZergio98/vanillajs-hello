/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "4GeeksAcademy"
  ];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const generarIndiceArrayRandom = array => {
    const lengthArray = array.length;

    const numberGenerated = Math.floor(Math.random() * lengthArray);

    return numberGenerated;
  };

  const generarExcusa = () => {
    const elementoExcuse = document.getElementById("excuse");

    elementoExcuse.innerText = `${who[generarIndiceArrayRandom(who)]} ${
      action[generarIndiceArrayRandom(action)]
    } ${what[generarIndiceArrayRandom(what)]} ${
      when[generarIndiceArrayRandom(when)]
    }`;
  };

  generarExcusa();

  setInterval(() => {
    generarExcusa();
  }, 3000);

  console.log("Hello Rigo from the console!");
};
