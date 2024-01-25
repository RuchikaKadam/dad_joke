const btnEle = document.getElementById("btn");
const jokeEle = document.getElementById("joke");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEle.innerText = "Cracking it...";
    btnEle.disabled = true;
    btnEle.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEle.disabled = false;
    btnEle.innerText = "Tell me a joke";

    jokeEle.innerText = data[0].joke;
  } catch (error) {
    jokeEle.innerText = "An error happened, try again later";
    btnEle.disabled = false;
    btnEle.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEle.addEventListener("click", getJoke);