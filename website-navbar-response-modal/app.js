const menu = document.querySelector("#mobile__menu");
const menuLinks = document.querySelector(".nav__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// modal items
const modal = document.getElementById("email__modal");
const openBtn = document.querySelector(".main__btn");
const closeBtn = document.querySelector(".close__btn");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// form validation
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

// show error message
function showError(input, message) {
  const formValidation = input.parentElement;
  formValidation.className = "form__validation error";

  const errorMessage = formValidation.querySelector("p");
  errorMessage.innerText = message;
}

// show valid message
function showValid(input) {
  const formValidation = input.parentElement;
  formValidation.className = "form__validation valid";
}

// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showValid(input);
    }
  });
}

// check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showValid(input);
  }
}

// check passwords match
function passwordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// get field name
function getFieldName(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([fullname, email, password, passwordConfirm]);
  checkLength(fullname, 3, 8);
  checkLength(password, 8, 25);
  checkLength(passwordConfirm, 8, 25);
  passwordMatch(password, passwordConfirm);
});
