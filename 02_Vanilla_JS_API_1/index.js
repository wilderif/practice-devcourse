const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const swapButton = document.getElementById("swap");

let exchangeRates = {};

const fetchData = async () => {
  const response = await fetch("https://open.exchangerate-api.com/v6/latest");
  const data = await response.json();
  exchangeRates = { ...data.rates };
};

const calculate = () => {
  const amountOneValue = amountOne.value;
  const rateOne = exchangeRates[currencyOne.value];
  const rateTwo = exchangeRates[currencyTwo.value];

  const amountTwoValue = (amountOneValue * rateTwo) / rateOne;
  amountTwo.value = amountTwoValue.toFixed(2);

  console.log(amountTwo);
  console.log(amountOneValue, rateOne, rateTwo);
  console.log(amountTwoValue);
};

swapButton.addEventListener("click", () => {
  calculate();
});

const init = async () => {
  await fetchData();
  for (let key in exchangeRates) {
    const inner = `<option value="${key}" data-rate="${exchangeRates[key]}">${key}</option>`;
    currencyOne.innerHTML += inner;
    currencyTwo.innerHTML += inner;
  }
};

init();
