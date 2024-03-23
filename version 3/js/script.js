"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// open modal
const openModal = function () {
  btnCloseModal.classList.remove("hidden");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// close modal
const closeModal = function () {
  btnCloseModal.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
