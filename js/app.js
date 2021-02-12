const closeBtn = document.querySelector(".close-btn");
var modalOpen = false;

const modal = document.querySelector(".modal");

closeBtn.addEventListener("click", () => {
  if (!modalOpen) {
    modal.classList.remove("is-active");
  } else {
    modal.classList.add("is-active");
  }
});
