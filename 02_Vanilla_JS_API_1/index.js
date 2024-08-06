const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const swapButton = document.getElementById("swap");
const displayedRate = document.querySelector("#rate p");
console.log(displayedRate);

let exchangeRates = {};

const fetchData = async () => {
  const response = await fetch("https://open.exchangerate-api.com/v6/latest");
  const data = await response.json();
  exchangeRates = { ...data.rates };
};

// calculate 부분 dom 변경 부분 분리할 것 (calculateRate기능 사용)
const calculate = () => {
  const amountOneValue = amountOne.value;
  const rateOne = exchangeRates[currencyOne.value];
  const rateTwo = exchangeRates[currencyTwo.value];

  const amountTwoValue = (amountOneValue * rateTwo) / rateOne;
  amountTwo.value = amountTwoValue.toFixed(2);
};

const calculateRate = () => {
  const rateOne = exchangeRates[currencyOne.value];
  const rateTwo = exchangeRates[currencyTwo.value];

  return rateTwo / rateOne;
};

const updateDisplayedRate = () => {
  displayedRate.textContent = `${1} ${currencyOne.value} = ${calculateRate()} ${
    currencyTwo.value
  }`;
};

swapButton.addEventListener("click", () => {
  let tmp = [currencyOne.value, amountOne.value];
  [currencyOne.value, amountOne.value] = [currencyTwo.value, amountTwo.value];
  [currencyTwo.value, amountTwo.value] = tmp;
  updateDisplayedRate();
});

const init = async () => {
  await fetchData();
  for (let key in exchangeRates) {
    const inner = `<option value="${key}" data-rate="${exchangeRates[key]}">${key}</option>`;
    currencyOne.innerHTML += inner;
    currencyTwo.innerHTML += inner;
  }
  updateDisplayedRate();
};

init();
