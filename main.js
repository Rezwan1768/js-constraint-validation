const form = document.querySelector("form");
const email = form.querySelector("input[type='email']");
const [password, confirmPass] = form.querySelectorAll("input[type='password']");

const pattern = /^[a-zA-Z0-9](?!.*[.\-_]{2})[a-zA-Z0-9.\-_]*[a-zA-Z0-9]@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

form.addEventListener("submit", onSubmit);
function onSubmit(event) {
    let isValid = true;

    // For required inputs
    form.querySelectorAll("input[required]").forEach(input => {
        if (input.validity.valueMissing) {
            input.setCustomValidity("This field must be filled out.");
            isValid = false;
        } else input.setCustomValidity("");
    });

    //Check Email pattern
    if (email.value && !pattern.test(email.value)) {
        email.setCustomValidity("Email format is invalid.");
        isValid = false;
    } else {
        email.setCustomValidity("");
    }

    if (password.value != confirmPass.value) {
        confirmPass.setCustomValidity("Password do not match.");
        isValid = false;
    } else {
        confirmPass.setCustomValidity("");
    }

    if (!isValid) {
        event.preventDefault();
        form.reportValidity();
    } 
}

form.querySelectorAll("input[required]").forEach(input => {
    input.addEventListener("input", () => {
        if (input.validity.valueMissing) {
            input.setCustomValidity("This field must be filled out.");
        } else {
            input.setCustomValidity("");
        }
    });
});

confirmPass.addEventListener("input", () => {
    if(confirmPass.value != password.value) {
        confirmPass.setCustomValidity("Password do not match.");
    } else confirmPass.setCustomValidity("");   
    confirmPass.reportValidity();
})

