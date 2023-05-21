const input = document.querySelector('[data-text="input"]');
const btnEncrypt = document.querySelector('[data-btns="encrypt"]');
const btnDecrypt = document.querySelector('[data-btns="decrypt"]');

const output = document.querySelector('[data-text="output"]');
const btnCopy = document.querySelector('[data-btns="copy"]');

function encryptText(text) {
  text = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return text;
}

function decryptText(text) {
  text = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return text;
}

console.log(encryptText("alura"));
console.log(decryptText("ailufatrai"));
