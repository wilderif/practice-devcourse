const modal = document.querySelector(".modal");
const addCardBtn = document.getElementById("add-card-btn");
const modalCloseBtn = document.getElementById("modal-close");

let cards = JSON.parse(localStorage.getItem("cards")) || [];

// 현재 인덱스도 스토리지에 저장해볼 것
let curCardIdx = 0;

// 카드 div 생성 및 addEventListener
const createCard = () => {
  cardContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <div class="front">${cards[curCardIdx].question}</div>
      <div class="back">${cards[curCardIdx].answer}</div>
    `;
  cardContainer.appendChild(card);
  cardCount.textContent = `${currentCardIndex + 1} / ${cards.length}`;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
};

addCardBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// 작성하던 내용 초기화 추가할 것
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

renderCard();

// addCardForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const question = document.getElementById('question').value;
//   const answer = document.getElementById('answer').value;
//   if (question && answer) {
//     cards.push({ question, answer });
//     localStorage.setItem('cards', JSON.stringify(cards));
//     renderCard();
//     modal.style.display = 'none';
//     addCardForm.reset();
//   }
// });

// prevBtn.addEventListener('click', () => {
//   if (cards.length > 0) {
//     currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
//     renderCard();
//   }
// });

// nextBtn.addEventListener('click', () => {
//   if (cards.length > 0) {
//     currentCardIndex = (currentCardIndex + 1) % cards.length;
//     renderCard();
//   }
// });

// clearBtn.addEventListener('click', () => {
//   localStorage.removeItem('cards');
//   cards = [];
//   currentCardIndex = 0;
//   renderCard();
// });
