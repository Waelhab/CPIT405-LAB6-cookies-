let initialLikes = 100;
let initialDislikes = 0;

let currentLikeCount = initialLikes;
let currentDislikeCount = initialDislikes;

const likeButton = document.getElementById("likeBtn");
const dislikeButton = document.getElementById("disLikeBtn");
const commentInput = document.getElementById("commentBox");
const submitButton = document.getElementById("Submit");
const resetButton = document.getElementById("Reset");

likeButton.innerText = `👍 ${currentLikeCount}`;
dislikeButton.innerText = `👎 ${currentDislikeCount}`;

likeButton.addEventListener("click", () => {
  currentLikeCount++;
  likeButton.innerText = `👍 ${currentLikeCount}`;
  disableLikeButtons();
  storeLikeData();
});

dislikeButton.addEventListener("click", () => {
  currentDislikeCount++;
  dislikeButton.innerText = `👎 ${currentDislikeCount}`;
  disableLikeButtons();
  storeLikeData();
});

const commentList = document.getElementById("commetnList");

submitButton.addEventListener("click", () => {
  if (commentInput.value.trim() !== "") {
    const commentElement = document.createElement("p");
    commentElement.innerText = commentInput.value.trim();
    commentList.appendChild(commentElement);
    commentInput.value = "";
    disableSubmitButton();
    storeSubmitData();
  }
});

resetButton.addEventListener("click", () => {
  enableLikeButtons();
  enableSubmitButton();
});

// Helper functions for cookies and disabling buttons

function storeLikeData() {
  document.cookie = "liked=true; max-age=60";
}

function storeSubmitData() {
  document.cookie = "submitted=true; max-age=60";
}

function disableLikeButtons() {
  likeButton.disabled = true;
  dislikeButton.disabled = true;
  likeButton.classList.add("bg-gray-400", "hover:bg-gray-400");
  dislikeButton.classList.add("bg-gray-400", "hover:bg-gray-400");
}

function disableSubmitButton() {
  submitButton.disabled = true;
  submitButton.classList.add("bg-gray-400", "hover:bg-gray-400");
}

function enableLikeButtons() {
  likeButton.disabled = false;
  dislikeButton.disabled = false;
  likeButton.classList.remove("bg-gray-400", "hover:bg-gray-400");
  dislikeButton.classList.remove("bg-gray-400", "hover:bg-gray-400");
}

function enableSubmitButton() {
  submitButton.disabled = false;
  submitButton.classList.remove("bg-gray-400", "hover:bg-gray-400");
}

window.onload = () => {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});

  if (cookies.liked === "true") {
    disableLikeButtons();
  }

  if (cookies.submitted === "true") {
    disableSubmitButton();
  }
};
