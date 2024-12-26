const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector(".modal-open-btn");
const closeBtn = dialog.querySelector(".modal-close-btn");

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
