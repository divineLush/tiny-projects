const counters = document.querySelectorAll('.counter-container__counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = Number(counter.getAttribute('data-target'));
    const current = Number(counter.innerText);
    const increment = target / 1000;

    if (current < target) {
      const rounded = Math.ceil(current + increment);
      counter.innerText = rounded;
      setTimeout(updateCounter, 10);
    }
  }

  updateCounter();
});
