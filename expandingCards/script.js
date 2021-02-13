const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    console.log(panel);
    removeActiveClasses();
    panel.classList.add('_active');
  });
});

const removeActiveClasses = () => {
  panels.forEach(panel => {
    panel.classList.remove('_active');
  });
}
