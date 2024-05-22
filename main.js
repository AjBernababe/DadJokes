const header = { headers: { Accept: "application/json" } }
const button = document.querySelector('button')
const jokeText = document.querySelector('#joke')
let joke

let getJokes = async () => {
    try {
        let jokeRequest = await axios.get('https://icanhazdadjoke.com/', header)
        joke = jokeRequest.data.joke
    }

    catch (e) {
    }
}

let displayJokes = async () => {
    jokeText.textContent = ''
    await getJokes()
    jokeText.append(joke);
}

button.addEventListener('click', displayJokes)