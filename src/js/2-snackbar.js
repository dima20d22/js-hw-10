import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayTime = document.querySelector('input[name="delay"]');
const stateInput = document.querySelectorAll('input[name="state"]');
const button = document.querySelector('button[type="submit"]');

button.addEventListener('click', e => {
  e.preventDefault();

  const delay = parseInt(delayTime.value, 10) * 1000;
  const selectedState = [...stateInput].find(radio => radio.checked);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay} ms`);
      } else {
        reject(`Rejected promise in ${delay} ms`);
      }
    }, delay);
  });
  promise
    .then(message => {
      iziToast.show({
        message: message,
        color: 'green',
      });
    })
    .catch(error => {
      iziToast.show({
        message: error,
        color: 'red',
      });
    });
});
