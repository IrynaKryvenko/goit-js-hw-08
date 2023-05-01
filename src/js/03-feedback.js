import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('#email'),
    textarea: document.querySelector('#message'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

updatePage();

function onFormSubmit(evt) {
    evt.preventDefault();
    if (input.value === "" || textarea.value === "") {
        return alert("Please fill in all the fields!");
    }
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
};

function updatePage() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        input.value = savedData.email || "";
        formData.email = savedDta.email || "";
        textarea.value = saveaData.message || "";
        formData.message = savedData.message || ""; 
    }
};