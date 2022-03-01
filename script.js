//DOM Selector

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const btn = document.querySelector("#btn");

//Fetch data

const address = "https://api.adviceslip.com/advice";

btn.addEventListener("click", () => {
  fetch(address)
    .then((res) => res.json())
    .then((data) => showdata(data))
    .catch((error) => error);

  function showdata(data) {
    h1.innerHTML = `<h1> advice ${data.slip.id}</h1>`;
    p.innerHTML = `<p> "${data.slip.advice}" </p>`;
  }
});
