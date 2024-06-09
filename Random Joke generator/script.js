const URL = "https://official-joke-api.appspot.com/random_joke";
const jokeDisplay = document.querySelector(".joke");
const btn = document.querySelector("#btn");

let getJoke = async()=>{
    try {
    let response = await fetch (URL);
    let getData = await response.json();
    jokeDisplay.innerHTML = `<p>Speaker: ${getData.setup}</p><br><p>Listener: ${getData.punchline}</p>`;
    } 
    catch (error) {
        console.error(error);
    } 
}
   btn.addEventListener("click", getJoke);