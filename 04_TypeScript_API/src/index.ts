function customGetElementById<T extends HTMLElement>(
  selector: string
): T | null {
  return document.querySelector(selector);
}

const elements = {
  currencyEl_one: customGetElementById<HTMLSelectElement>("#currency-one")!,
  amountEl_one: customGetElementById<HTMLInputElement>("#amount-one")!,
  currencyEl_two: customGetElementById<HTMLSelectElement>("#currency-two")!,
  amountEl_two: customGetElementById<HTMLInputElement>("#amount-two")!,
  rateEl: customGetElementById<HTMLDivElement>("#rate")!,
  swap: customGetElementById<HTMLButtonElement>("#swap")!,
};

interface Rates {
  [key: string]: number;
}

const getList = async (): Promise<Rates> => {
  const res = await fetch("https://open.exchangerate-api.com/v6/latest");
  const rates = await res.json();
  const list: Rates = rates.rates;
  return list;
};

const optionList = async (): Promise<void> => {
  const list = await getList();
  for (let key in list) {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.value = key;
    option1.innerText = key;
    option1.setAttribute("data-rate", list[key].toString());

    option2.value = key;
    option2.innerText = key;
    option2.setAttribute("data-rate", list[key].toString());

    elements.currencyEl_one.appendChild(option1);
    elements.currencyEl_two.appendChild(option2);

    if (key === "USD") {
      option1.selected = true;
    }
    if (key === "KRW") {
      option2.selected = true;
    }
  }

  calculate();
};

optionList();

const calculate = (): void => {
  const currency_one = elements.currencyEl_one.value;
  const currency_two = elements.currencyEl_two.value;

  const rate_one = parseFloat(
    elements.currencyEl_one.options[
      elements.currencyEl_one.selectedIndex
    ].getAttribute("data-rate")!
  );
  const rate_two = parseFloat(
    elements.currencyEl_two.options[
      elements.currencyEl_two.selectedIndex
    ].getAttribute("data-rate")!
  );

  const rate = rate_two / rate_one;
  elements.rateEl.innerText = `1 ${currency_one} = ${rate.toFixed(
    4
  )} ${currency_two}`;

  elements.amountEl_two.value = (
    parseFloat(elements.amountEl_one.value) * rate
  ).toFixed(2);
};

elements.currencyEl_one.addEventListener("change", calculate);
elements.amountEl_one.addEventListener("input", calculate);
elements.currencyEl_two.addEventListener("change", calculate);
elements.amountEl_two.addEventListener("input", calculate);

elements.swap.addEventListener("click", () => {
  const temp = elements.currencyEl_one.value;
  elements.currencyEl_one.value = elements.currencyEl_two.value;
  elements.currencyEl_two.value = temp;

  const tempAmount = elements.amountEl_one.value;
  elements.amountEl_one.value = elements.amountEl_two.value;
  elements.amountEl_two.value = tempAmount;

  calculate();
});
