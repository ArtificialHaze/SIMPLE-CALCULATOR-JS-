const calculatorBtns = document.querySelectorAll("button");
const inputElement = document.getElementById("result");

const clearResults = () => {
  inputElement.value = "0";
};

const calculateResults = () => {
  inputElement.value = eval(inputElement.value);
};

const appendValue = (value) => {
  inputElement.value += value;
};

for (let i = 0; i < calculatorBtns.length; i++) {
  calculatorBtns[i].addEventListener("click", () => {
    const btnValue = calculatorBtns[i].textContent;

    if (btnValue === "C") {
      clearResults();
    } else if (btnValue === "=") {
      calculateResults();
    } else {
      appendValue(btnValue);
    }
  });
}
