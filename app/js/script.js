const emailInput = document.querySelector("input[type=email");
const emailError = document.querySelector(".email-error");

emailInput.addEventListener('invalid', e => {
    e.preventDefault();
    if (emailInput.validity.valueMissing) {
        emailError.textContent = "Oops! Please add your email";
    }
    if (emailInput.validity.typeMismatch) {
        emailError.textContent = "Oops! Please check your email";
    }
    emailError.classList.add('show-error');
});
