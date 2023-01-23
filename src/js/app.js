import "../scss/app.scss";
//const R = require("ramda");
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  //const isEven = (n) => n % 2 === 0;
  // const filteredArray = R.filter(isEven, numbersArray);

  const filteredArray = numbersArray.filter(number => number % 2 === 0)
  filteredArray.forEach(element => {
    let li = document.createElement("li")
    li.append(element);
    ul.append(li);
  });
});
