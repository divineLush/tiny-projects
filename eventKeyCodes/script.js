const eventKey = document.querySelector('.key__event-key');
const eventKeyCode = document.querySelector('.key__event-key-code');
const eventCode = document.querySelector('.key__event-code');

window.addEventListener('keydown', e => {
    eventKey.innerText = e.key !== ' ' ? e.key : 'Space';
    eventKeyCode.innerText = e.keyCode;
    eventCode.innerText = e.code;
});
