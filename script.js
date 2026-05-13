const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const feedbackForm = document.getElementById("feedback-form");
const successModal = document.getElementById("success-modal");
const closeModalButton = document.getElementById("close-modal");

if (feedbackForm && successModal) {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedbackForm.reset();
    successModal.classList.add("open");
  });
}

if (closeModalButton && successModal) {
  closeModalButton.addEventListener("click", () => {
    successModal.classList.remove("open");
  });
}

if (successModal) {
  successModal.addEventListener("click", (event) => {
    if (event.target === successModal) {
      successModal.classList.remove("open");
    }
  });
}
