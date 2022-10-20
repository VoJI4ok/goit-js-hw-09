import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  submitButton: document.querySelector('button'),
};

refs.submitButton.addEventListener('click', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const delay = +refs.delay.value;
  const step = +refs.step.value;
  const amount = +refs.amount.value;
  callPromise(delay, step, amount);
}

function callPromise(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    let position = i;
    createPromise({ position, delay });
    delay += step;
  }
}

function createPromise({ position, delay }) {
  return new Promise(() => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}