let test =
  "123456789657489567345678986765283421087654678298765467829875647298457434782378253";
const line = document.querySelector(".line");
const numbers = document.querySelector(".numbers");
const numbers2 = document.querySelector(".numbers2");

// TEEEST
const btn = document.querySelector("button");
//

function renderBlock() {
  let block = document.createElement("div");
  block.classList.add("block");
  line.appendChild(block);
}

for (let i = 0; i < 81; i++) {
  renderBlock();
}

function renderNum(value, numbers, clas) {
  let num = document.createElement("div");
  num.classList.add(clas);
  num.textContent = value;
  numbers.appendChild(num);
}

for (let i = 1; i < 10; i++) {
  renderNum(i, numbers, "num");
  renderNum(i, numbers2, "num2");
}

const allBlock = document.querySelectorAll(".block");
allBlock.forEach((item, index) => {
  item.textContent = test[index];
});
btn.addEventListener("click", () => {
  // console.log(test);
  // console.log(allBlock);
  allBlock.forEach((item, index) => {
    item.textContent = test[index];
  });
});
