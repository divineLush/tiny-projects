const textElement = document.querySelector('.text');
const speedController = document.querySelector('.speed-controller__input');
const text = 'solve et coagula';

let i = 1;
let speed = 1;

const updateSpeed = value => { speed = 600 / value };

updateSpeed(speedController.value);
writeText();

function writeText() {
  textElement.innerText = text.slice(0, i);
  i++;

  // start over
  if (i > text.length)
    i = 1;

  setTimeout(writeText, speed);
}

speedController.addEventListener('input', e => {
  updateSpeed(e.target.value);
});
