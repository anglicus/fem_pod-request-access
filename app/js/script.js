const emailInput = document.querySelector("input[type=email");
const emailError = document.querySelector(".email-error");

emailInput.addEventListener('invalid', e => {
    e.preventDefault();
    emailError.classList.add('show-error');
});
