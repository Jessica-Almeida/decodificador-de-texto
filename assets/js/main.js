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

function encryptBtnHandler() {
  const encryptedText = input.value;

  const resultEncrypt = encryptText(encryptedText);
  output.value = resultEncrypt;

  input.value = "";

  return resultEncrypt;
}

function decryptBtnHandler() {
  const decryptedText = input.value;

  const resultDecrypt = decryptText(decryptedText);
  output.value = resultDecrypt;

  input.value = "";

  return resultDecrypt;
}

function copyText() {
  const copiedText = output.value;

  try {
    navigator.clipboard.writeText(copiedText);
    alert("Texto copiado com sucesso!");
    output.value = "";
  } catch (error) {
    console.error("Erro ao copiar o texto:", error);
  }
}

btnEncrypt.addEventListener("click", encryptBtnHandler);

btnDecrypt.addEventListener("click", decryptBtnHandler);

btnCopy.addEventListener("click", copyText);
