import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

const { form, delay, step, amount } = refs;

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  let enteredDelay = Number(delay.value);
  const enteredStep = Number(step.value);
  const enteredAmount = Number(amount.value);

  for (let i = 1; i <= enteredAmount; i += 1) {
    createPromise(i, enteredDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
        console.log(`❌ Rejected promise ${position} in ${delay} ms`);
      });

    enteredDelay += enteredStep;
  };
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay });
      };
    }, delay);
  });
}