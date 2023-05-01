import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

updatePage();

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('Please fill in all the fields!');
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function updatePage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    refs.input.value = savedData.email || '';
    formData.email = savedData.email || '';
    refs.textarea.value = savedData.message || '';
    formData.message = savedData.message || '';
  }
}