function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const stringPin = pin + "";
  if (stringPin.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  document.getElementById("display-pin").value = getPin();
}
//
document.getElementById("key-pad").addEventListener("click", function (event) {
  const typedNumber = document.getElementById("typed-numbers");
  const number = event.target.innerText;
  if (isNaN(number)) {
    if (number == "C") {
      typedNumber.value = "";
    }
  } else {
    const previousNumber = typedNumber.value;
    const newNumber = previousNumber + number;
    typedNumber.value = newNumber;
  }
});
function pinVerify() {
  const generateInput = document.getElementById("display-pin").value;
  const calcInput = document.getElementById("typed-numbers").value;
  const wrongType = document.getElementById("pin-wrong");
  const rightType = document.getElementById("pin-right");
  if (generateInput == calcInput) {
    rightType.style.display = "block";
    wrongType.style.display = "none";
  } else {
    wrongType.style.display = "block";
    rightType.style.display = "none";
  }
}
