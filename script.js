/*****************
 * links
 *
 * {@link} - https://www.w3schools.com/html/html_forms.asp
 * {@link} - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * {@link} - https://fonts.google.com/
 * {@link} - https://developer.mozilla.org/en-US/docs/Web/CSS/:valid
 * {@link} - https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
 * {@link} - https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * {@link} - https://html.com/attributes/input-pattern/
 * {@link} - https://regexr.com/3bfsi
 * {@link} - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
 * {@link} - https://www.w3schools.com/jsref/event_preventdefault.asp
 * {@link} - https://css-tricks.com/form-validation-part-1-constraint-validation-html/
 * {@link} - https://rangle.io/blog/how-to-store-user-passwords-and-overcome-security-threats-in-2017/
 *****************/

const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    //using contraint api
    isValid = form.checkValidity();
    //console.log(isValid);

    // if the form isn't valid
    //style main message for an error
    if (!isValid) {
        message.textContent = 'please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    //check to see if passwords fields match
    if (password1El.value === password2El.value) {

        // if they match set value to true and borders to green
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';

    } else {
        // if they don't match, border color of input to red, change message
        passwordsMatch = false;

        message.textContent = 'make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';

        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';

        return;
    }

    //if form is valid and passwords match
    if (isValid && passwordsMatch) {
        //  message for success
        message.textContent = 'successfully registred.';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';

    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };

    // do somehing with user data
    console.log(user);
}

function processFormData(e) {
    //console.log(e);
    e.preventDefault();
    //console.log(e);

    validateForm();
    //submit data if valid

    if (isValid && passwordsMatch) {
        storeFormData();
    }

}

//event listener
form.addEventListener('submit', processFormData);