const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector(".modal-open-btn");
const closeBtn = dialog.querySelector(".modal-close-btn");

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

const timeCalc = document.querySelector(".time-calc form");
const viewTrainingTime = document.querySelector(".training-time");
const viewMyGoal = document.querySelector(".view-goal");
const viewCalcTime = document.querySelector(".view-calc-time");

timeCalc.addEventListener("submit", (e) => {
  e.preventDefault();
  viewTrainingTime.style.display = "unset";
  const myGoal = timeCalc.querySelector("#job").value;
  const myTrainingTime = timeCalc.querySelector("#hour").value;

  if (!myGoal && !myTrainingTime) {
    alert("목표와 훈련 시간을 입력하지 않았습니다!");
  } else if (!myGoal) {
    alert("목표를 입력하지 않았습니다!");
  } else if (!myTrainingTime) {
    alert("훈련시간을 입력하지 않았습니다!");
  }

  if (myGoal && myTrainingTime) {
    viewMyGoal.textContent = myGoal;
    viewCalcTime.textContent = Math.trunc(10000 / myTrainingTime);
  }
});
