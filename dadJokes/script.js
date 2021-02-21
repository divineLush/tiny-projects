const jokeEl = document.querySelector('.container__joke');
const jokeBtn = document.querySelector('.container__btn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    fetch('https://icanhazdadjoke.com/', config)
        .then(res => res.json())
        .then(res => { jokeEl.innerText = res.joke });
}
