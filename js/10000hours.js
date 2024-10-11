const dialog = document.querySelector("dialog");
const showDialogBtn = document.getElementById("showDialogBtn");
const closeBtn = dialog.querySelector("button");

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
