// DOM Elements
let inputA = document.querySelector("#a");
let inputB = document.querySelector("#b");
let code = document.querySelector("#code");
let mainDirection = "to top";

function setDirection(value, _this) {
  let allBtns = document.querySelectorAll(".btns button");
  for (btn of allBtns) {
    btn.classList.remove("active");
  }
  _this.classList.add("active");
  mainDirection = value;
}

function get_code() {
  code.value = `background-image:linear-gradient(${mainDirection}, ${inputA.value},${inputB.value})`;
  document.body.style.cssText = `background-image:linear-gradient(${mainDirection}, ${inputA.value},${inputB.value})`;
}

function copy_code() {
  code.select();
  let textCode = code.value;
  copyToClipboard(textCode);
}

async function copyToClipboard(textCode) {
  try {
    await navigator.clipboard.writeText(textCode);
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}

get_code();
