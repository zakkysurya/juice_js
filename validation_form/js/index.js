console.log('here javascript');
import UrlValidation from './UrlValidation.js';

const formValidation = document.getElementById('formValidation');
const inputUrl = document.getElementById('inputUrl');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const inputConfirmPassword = document.getElementById('inputConfirmPassword');
const inputSelectOption = document.getElementById('inputSelectOption');
const inputFile = document.getElementById('inputFile');
const inputTextarea = document.getElementById('inputTextarea');

formValidation.addEventListener('submit', (e) => {
  e.preventDefault();
  // const url = inputUrl;
  const email = inputEmail.value;
  const password = inputPassword.value;
  const confirmPassword = inputConfirmPassword.value;
  const selectOption = inputSelectOption.value;
  const file = inputFile.value;
  const textarea = inputTextarea.value;

  new UrlValidation(inputUrl);

  // let data = {
  //   url: url,
  //   email: email,
  //   password: password,
  //   confirmPassword: confirmPassword,
  //   selectOption: selectOption,
  //   file: file,
  //   textarea: textarea,
  // };

  //   console.log(data);
});
