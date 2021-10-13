// -------------------theme-toggle---------------
const inputs = document.querySelectorAll(".header__theme__theme");
const labels = document.querySelectorAll(".header__theme__label");
const doc = document.documentElement;

const check = (counter) => {
  labels[counter].classList.add("header__theme__label--checked");
  const radio = document.querySelector(`#theme${counter}`);
  radio.checked = true;
};
check(0);

const checkReset = () => {
  labels.forEach((label) => {
    label.classList.remove("header__theme__label--checked");
  });
};

const setTheme = (counter) => {
  doc.setAttribute("data-theme", `theme-${counter}`);
};
setTheme(0);

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    checkReset();
    check(index);
    setTheme(index);
  });
});

// --------------------calculation------------------
const keys = document.querySelectorAll(".keypad__key");
const screen = document.querySelector("#screen");
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.preventDefault();
    let value = screen.innerText;
    let last = value.length - 1;
    last = screen.innerText[last];

    const checkLast = () => {
      if (last === "+" || last === "-" || last === "*" || last === "/") {
        screen.innerText = screen.innerText.slice(0, -1);
      }
      if (value === "") screen.innerText = "0";
      screen.innerText += e.target.innerText;
    };
    switch (e.target.innerText) {
      case "RESET":
        screen.innerText = "";
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "ERROR";
        }
        break;
      case "DEL":
        screen.innerText = screen.innerText.slice(0, -1);
        break;
      case ".":
        if (last === ".") return;
        screen.innerText += e.target.innerText;
        break;
      case "+":
        checkLast();
        break;
      case "-":
        checkLast();
        break;
      case "*":
        checkLast();
        break;
      case "/":
        checkLast();
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});
