const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const swapButton = document.getElementById("swap");
const displayedRate = document.querySelector("#rate p");

let exchangeRates = {};

const fetchData = async () => {
  const response = await fetch("https://open.exchangerate-api.com/v6/latest");
  const data = await response.json();
  exchangeRates = { ...data.rates };
};

const calculateRate = () => {
  const rateOne = exchangeRates[currencyOne.value];
  const rateTwo = exchangeRates[currencyTwo.value];

  return rateTwo / rateOne;
};

const calculateAmount = () => {
  const amountOneValue = amountOne.value;
  const curRate = calculateRate();

  return amountOneValue * curRate;
};

const updateDisplayedRate = () => {
  displayedRate.textContent = `${1} ${currencyOne.value} = ${calculateRate()} ${
    currencyTwo.value
  }`;
};

amountOne.addEventListener("input", () => {
  amountTwoValue = calculateAmount();
  console.log(amountOne.value);

  amountTwo.value = amountTwoValue.toFixed(2);
});

amountOne.addEventListener("change", () => {
  amountOne.value = parseFloat(amountOne.value).toFixed(2);
});

// select가 바뀔 때, updateDisplayedRate, calculateAmount  실행

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
  amountOne.value = parseFloat(amountOne.value).toFixed(2);
  amountTwo.value = parseFloat(amountTwo.value).toFixed(2);
  updateDisplayedRate();
};

init();
