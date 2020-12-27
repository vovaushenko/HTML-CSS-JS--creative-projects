const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

/**************** Passing Joke to VoiceRSS API ******************/
const API_KEY = '5fa17b63428147d0a7f7df8ecd85f081';

function tellMe(joke) {
  VoiceRSS.speech({
    key: API_KEY,
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

/****************** Get jokes from Joke API ******************/
let joke = '';
async function getJokes() {
  const API_URL =
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    // Text-to-Speech
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (error) {
    console.log('Whoops', error);
  }
}

/***************** Disable/Enable Button *****************/
function toggleButton() {
  button.disabled = !button.disabled;
}

/***************** Event Listeners ******************/
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
