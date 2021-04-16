const number = document.querySelector('#number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

let count = 0;

const increaseCount = () => {
  count++;
  number.textContent = count;
};
const decreaseCount = () => {
  count--;
  number.textContent = count;
};
const resetCount = () => {
  count = 0;
  number.textContent = count;
};

increase.addEventListener('click', increaseCount);
decrease.addEventListener('click', decreaseCount);
reset.addEventListener('click', resetCount);
