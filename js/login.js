// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // --> set id on the html element 
    // --> get the element
    // --> get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: DO NOT VERIFY email & password on the client side (It's only practise purpose)
    // step-4: verify email and password and check whether valid user or not
    if (email === 'amaraccount@bank.com' && password === 'secret') {
        window.location.href = 'bank_inside.html';
    }
    else {
        alert('Please, Insert valid Username & password')
    }
})