// slector
const inputCheack = document.querySelector(".flightcheck");
const felidFlight = document.querySelector(".flightFelid");
// event
const openAndCloseFlightFiled = (checkBox) => {
  if (checkBox.checked == true) {
    felidFlight.classList.add("active");
  } else {
    felidFlight.classList.remove("active");
  }
};
