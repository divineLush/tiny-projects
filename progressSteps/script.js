const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click', () => {
  if (currentActive < circles.length)
    currentActive++;

  update();

  console.log(currentActive);
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1)
    currentActive = 1;

  update();

  console.log(currentActive);
});

const update = () => {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('_active')
    } else {
      circle.classList.remove('_active');
    }
  });

  const actives = document.querySelectorAll('._active');
  console.log(actives.length, circles.length);
  const progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
