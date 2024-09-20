function formatNumber(num) {
  let str = num.replace(/\D/g, ""); // Удалить все, кроме чисел
  if (str.length === 0) return "0,00"; // В случае пустого ввода
  if (str.length === 1) return "0,0" + str;
  if (str.length === 2) return "0," + str;

  let intPart = str.slice(0, str.length - 2);
  let decPart = str.slice(str.length - 2);

  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return intPart + "," + decPart;
}

function onInput(event) {
  let formattedValue = formatNumber(event.target.value);
  event.target.value = formattedValue;
}

document.addEventListener("DOMContentLoaded", (event) => {
  let inputElement = document.querySelector('input[name="input"]');
  inputElement.addEventListener("input", onInput);
});

const input = document.getElementById("input");

input.addEventListener("focus", function () {
  if (this.value === "0,00") {
    this.value = "";
  }
});

input.addEventListener("blur", function () {
  if (this.value === "") {
    this.value = "0,00";
  }
});
