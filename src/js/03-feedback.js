import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(historyUpdate, 500));

form.addEventListener('submit', handleSubmitForm);


const STORAGE_KEY = 'feedback-form-state';
let feedbackFormState = {};

historyCheck();

function historyCheck() {
  const currentValue = getFormCurrentValue();

  if (currentValue?.email) {
    feedbackFormState.email = form.email.value = currentValue.email;
  }

  if (currentValue?.message) {
    feedbackFormState.message = form.message.value = currentValue.message;
  }
}

function historyUpdate(event) {
  feedbackFormState[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
}

function handleSubmitForm(event) {
  event.preventDefault();

  if (!event.target.email.value || !event.target.message.value) {
    return;
  }

  formDataOutput();
  clearDataStorage();
  event.currentTarget.reset();
}

function formDataOutput() {
  if (getFormCurrentValue()) {
    console.log(getFormCurrentValue());
  }
}

function getFormCurrentValue() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function clearDataStorage() {
  if (getFormCurrentValue()) {
    localStorage.removeItem(STORAGE_KEY);
  }

  feedbackFormState = {};
}
