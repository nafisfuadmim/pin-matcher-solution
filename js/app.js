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
