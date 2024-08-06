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

// Input field event listener
// focus 될 때 초기화
amountOne.addEventListener("focus", () => {
  amountOne.value = "";
});

// 매 입력마다 2번 째 2번 째 input field 값 변경
amountOne.addEventListener("input", () => {
  amountTwoValue = calculateAmount();
  amountTwo.value = amountTwoValue.toFixed(2);
});

// 입력 완료 시 format 맞추기
amountOne.addEventListener("change", () => {
  amountOne.value = parseFloat(amountOne.value).toFixed(2);
});

// select event listener
// updateDisplayedRate, calculateAmount 실행 및 2번 째 input field 값 변경
currencyOne.addEventListener("change", () => {
  amountTwoValue = calculateAmount();
  amountTwo.value = amountTwoValue.toFixed(2);
  updateDisplayedRate();
});

currencyTwo.addEventListener("change", () => {
  amountTwoValue = calculateAmount();
  amountTwo.value = amountTwoValue.toFixed(2);
  updateDisplayedRate();
});

// swap button
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
