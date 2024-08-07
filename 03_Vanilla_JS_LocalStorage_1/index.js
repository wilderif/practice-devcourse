const modal = document.querySelector(".modal");
const modalOpenBtn = document.getElementById("add-card-btn");
const modalCloseBtn = document.getElementById("modal-close");
const addCardForm = document.getElementById("add-card-form");
const cardContainer = document.querySelector(".card-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const clearBtn = document.getElementById("clear-btn");
const cardCount = document.getElementById("card-count");

const cards = JSON.parse(localStorage.getItem("cards")) || [];

// 현재 인덱스도 스토리지에 저장해볼 것
let curCardIdx = 0;

// 카드 div 생성 및 addEventListener
const createCard = () => {
  // cardContainer.innerHTML = "";
  console.log(cardContainer);

  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `
      <div class="front">${cards[curCardIdx].question}</div>
      <div class="back">${cards[curCardIdx].answer}</div>
    `;
  cardContainer.appendChild(newCard);
  cardCount.textContent = `${curCardIdx + 1} / ${cards.length}`;

  newCard.addEventListener("click", () => {
    newCard.classList.toggle("flipped");
  });
};

const renderCard = () => {};

modalOpenBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

modalCloseBtn.addEventListener("click", () => {
  addCardForm.reset();
  modal.style.display = "none";
});

addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;
  if (question && answer) {
    cards.push({ question, answer });
    localStorage.setItem("cards", JSON.stringify(cards));
    createCard();
    modal.style.display = "none";
    addCardForm.reset();
  }
});

prevBtn.addEventListener("click", () => {
  if (cards.length > 0) {
    curCardIdx = (curCardIdx - 1 + cards.length) % cards.length;
    renderCard();
  }
});

nextBtn.addEventListener("click", () => {
  if (cards.length > 0) {
    currentCardIcurCardIdxndex = (curCardIdx + 1) % cards.length;
    renderCard();
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("cards");
  cards = [];
  cardCount.textContent = `${0} / ${0}`;
  curCardIdx = 0;
});
