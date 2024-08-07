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

const updateCardCount = () => {
  if (cards.length) {
    cardCount.textContent = `${curCardIdx + 1} / ${cards.length}`;
  } else {
    cardCount.textContent = `${0} / ${0}`;
  }
};

// 카드 div 생성 및 addEventListener
// "클릭하면 뒤집혀요" 추가할 것
const createCard = () => {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `
      <div class="front">
        <p>클릭하면 뒤집혀요</p>
        <p>${cards[curCardIdx].question}</p>
      </div>
      <div class="back">
        <p>클릭하면 뒤집혀요</p>
        <p>${cards[curCardIdx].answer}</p>
      </div>
    `;
  cardContainer.appendChild(newCard);
  updateCardCount();

  newCard.addEventListener("click", () => {
    newCard.classList.toggle("flipped");
  });
};

// 현재 index -1 ~ +1 까지 화면에 랜더링 하고,
// 현재 index가 가운데 오도록
const renderCard = () => {
  if (cards.length >= 3) {
  } else if (cards.length == 2) {
  } else if (cards.length == 1) {
  } else {
  }
};

// 다음 카드 이전 카드 눌렀을 때도 적용
const moveLeft = () => {};
const moveRight = () => {};

const move = () => {};

modalOpenBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// modal content 바깥 부분 눌렀을 때도 같은 동작 하도록 추가해볼 것
// 모달 닫는 동작 함수로 따로 분리
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

prevBtn.addEventListener("click", moveRight);

nextBtn.addEventListener("click", moveLeft);

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("cards");
  cards = [];
  curCardIdx = 0;
  updateCardCount();
});
