// varable
const taps = document.querySelectorAll(".singelTap");

// event
taps.forEach((tap) => {
  tap.addEventListener("click", () => {
    taps.forEach((item) => {
      item.classList.remove("active");
    });
    tap.classList.add("active");
  });
});
