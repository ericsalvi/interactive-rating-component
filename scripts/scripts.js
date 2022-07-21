const form = document.querySelector("form");
const rating = document.querySelectorAll("input[name='rating']");
const messageResults = document.querySelector(".message__results span");
const formCard = document.querySelector(".form");
const messageCard = document.querySelector(".message");
let ratingResponse = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < rating.length; i++) {
    ratingResponse.push(rating[i].checked);
  }
  messageResults.innerHTML = ratingResponse.indexOf(true) + 1;
  formCard.style.display = "none";
  messageCard.style.display = "flex";
  setTimeout(formRefresh, 5000);
});

const formRefresh = () => {
  ratingResponse = [];
  formCard.style.display = "flex";
  messageCard.style.display = "none";
};
