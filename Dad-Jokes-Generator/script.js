const btn = document.getElementById('btn');
const joke = document.getElementById('joke');

const apiKey = 'EUqu9bmDAR+LwT5c/d7omQ==YMropQmCs8fBrHc3';
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

async function getJoke() {
  try {
    joke.innerText = 'Updating...';
    btn.disabled = true;
    btn.innerText = 'Loading...';
    const response = await fetch(apiURL, options);
    const data = await response.json();
    //   console.log(data[0].joke);
    joke.innerText = data[0].joke;
    btn.disabled = false;
    btn.innerText = 'Tell me a Joke';
  } catch (err) {
    joke.innerText = 'An error occurred, please try later!';
    btn.disabled = false;
    btn.innerText = 'Tell me a Joke';
  }
}

btn.addEventListener('click', getJoke);
