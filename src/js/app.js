import "../scss/app.scss";
import * as R from '/node_modules/ramda/es/index.js';


window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let arrayToPluck = R.pluck('class');
  arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];


  const articles = document.querySelectorAll("article");


});
