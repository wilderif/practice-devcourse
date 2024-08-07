// localStorage의 data와 cards 변수의 데이터 동기화 시점 전부 다시 확인할 것

const modal = document.querySelector(".modal");
const modalOpenBtn = document.getElementById("add-card-btn");
const modalCloseBtn = document.getElementById("modal-close");
const addCardForm = document.getElementById("add-card-form");
const cardContainer = document.querySelector(".card-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const clearBtn = document.getElementById("clear-btn");
const cardCount = document.getElementById("card-count");

let cards = JSON.parse(localStorage.getItem("cards")) || [];

// 현재 인덱스도 스토리지에 저장해볼 것
let curCardIdx = 0;

const updateCardCount = () => {
  if (cards.length) {
    cardCount.textContent = `${curCardIdx + 1} / ${cards.length}`;
  } else {
    cardCount.textContent = `${0} / ${0}`;
  }
};

// 새로운 카드 localStorage에 저장하는 함수
const addCard = (question, answer) => {
  cards.push({ question, answer });
  localStorage.setItem("cards", JSON.stringify(cards));
};

// 카드 div 생성 및 addEventListener
// index를 parameter로 받아서 활용하도록 수정
const createCard = (idx) => {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `
      <div class="front">
        <p>클릭하면 뒤집혀요</p>
        <p>${cards[idx].question}</p>
      </div>
      <div class="back">
        <p>클릭하면 뒤집혀요</p>
        <p>${cards[idx].answer}</p>
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
const renderCard = (curIdx) => {
  cardContainer.innerHTML = "";
  if (curIdx == -1) return;

  // 카드 개수에 따라 다른 UI 적용해볼 것
  // if (cards.length >= 3) {
  // } else if (cards.length == 2) {
  // } else if (cards.length == 1) {
  // }

  for (let i = 0; i < 3; i++) {
    createCard(curIdx + (i % cards.length));
  }
};

// 다음 카드 이전 카드 눌렀을 때도 적용
// flag로 방향 설정
const move = (flag) => {
  cardContainer.style.transition = "transform 0.6s ease";
  cardContainer.style.transform = flag
    ? "translateX(calc(100% / -3 * 2))"
    : "translateX(0)";

  setTimeout(() => {
    cardContainer.style.transition = "none";
    cardContainer.style.transform = "translateX(calc(100% / -3))";

    // 조건문 내부에 Index 업데이트 추가할 것
    // Index만 변경하고 renderCard 함수 사용하는 방법으로 수정
    if (flag) {
      curCardIdx = (curCardIdx + 1) % cards.length;
      renderCard(curCardIdx);
    } else {
      curCardIdx = (curCardIdx - 1 + cards.length) % cards.length;
      renderCard(curCardIdx);
    }
  }, 600);
};

const handleCloseModal = () => {
  addCardForm.reset();
  modal.style.display = "none";
};

modalOpenBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// modal content 바깥 부분 눌렀을 때도 같은 동작 하도록 추가해볼 것
// 모달 닫는 동작 함수로 따로 분리
modalCloseBtn.addEventListener("click", () => {
  handleCloseModal();
});

addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;
  if (!question || !answer) return;

  addCard(question, answer);
  curCardIdx++;
  renderCard(curCardIdx);
  handleCloseModal();
});

prevBtn.addEventListener("click", () => {
  move(false);
});

nextBtn.addEventListener("click", () => {
  move(true);
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("cards");
  cards = [];
  renderCard(-1);
  curCardIdx = 0;
  updateCardCount();
});
