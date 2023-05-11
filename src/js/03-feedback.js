import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {};


const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFormData) {
  form.email.value = savedFormData.email || '';
  form.message.value = savedFormData.message || '';
}

const onInputFill = throttle(() => {
  formData.email = form.email.value;
  formData.message = form.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

form.addEventListener('input', onInputFill);


form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!email || !message) {
    console.log('Please fill out all required fields.');
    return;
  }

 
  form.reset();
  localStorage.removeItem('feedback-form-state');


  const submittedFormData = {
    email,
    message,
  };
  console.log(submittedFormData);
});

