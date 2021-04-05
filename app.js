let count = 0;

const btns = document.querySelectorAll(".button");
const value = document.querySelector("#value");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const operation = e.currentTarget.classList;
    if (operation.contains("decrease")) count--;
    else if (operation.contains("increase")) count++;
    else if (operation.contains("reset")) count = 0;

    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else value.style.color = "gray";

    value.textContent = count;
  });
});
