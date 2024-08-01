'use strict';

// ELEMENTS
const btnCreateAccount = document.querySelector('.btn_create_acc');
const labelLogin = document.querySelector('.login_label');
const pInstructions = document.querySelector('.login_instructions');
const formSignIn = document.querySelector('.form_sign_in');
const formSignUp = document.querySelector('.form_sign_up');
const spanForgotPW = document.querySelector('.span_forgot_pw');
const spanSignIn = document.querySelector('.span_sign_in');
const lineBreak = document.querySelector('.login_hr');

// FUNCTION TO TOGGLE FORM
function toggleForm(isSignUp) {
    if (isSignUp) {
        labelLogin.textContent = "Sign Up";
        pInstructions.innerHTML = `Please enter your information <br> to create an account`;

        formSignIn.classList.add('hidden');
        spanForgotPW.classList.add('hidden');
        btnCreateAccount.classList.add('hidden');
        lineBreak.classList.add('hidden');

        formSignUp.classList.remove('hidden');
        spanSignIn.classList.remove('hidden');
    } else {
        labelLogin.textContent = "Sign In";
        pInstructions.innerHTML = `Welcome back! <br> Please enter your information`;

        formSignIn.classList.remove('hidden');
        spanForgotPW.classList.remove('hidden');
        btnCreateAccount.classList.remove('hidden');

        formSignUp.classList.add('hidden');
        spanSignIn.classList.add('hidden');
        lineBreak.classList.remove('hidden');
    }
}

// EVENT HANDLERS
btnCreateAccount.addEventListener('click', function(e) {
    e.preventDefault();
    toggleForm(true);
});

spanSignIn.addEventListener('click', function(e) {
    e.preventDefault();
    toggleForm(false);
});

