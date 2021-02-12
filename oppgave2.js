// Oppgave 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

const thediv = document.querySelector(".thediv");

listGames = (games) => {
    // console.log(games);
    thediv.innerHTML = "";
    for (let i of games.results) {
      if(i === games.results[8]){
        break
    }
      let newDiv = `
        <ul>
            <h2>${i.name}</h2>
            <p>Rating: ${i.rating}</p>
            <p>Tags: ${i.tags.length}</p>
        </ul>`;
            thediv.innerHTML += newDiv;
            
    }
    
}


fetch(url)
.then(response => response.json())
.then(data => listGames(data))
// .then(data => console.log(data))
.catch(error => {
  console.error(error.message);
  thediv.innerHTML = `<div class="error">Does not work</div>`;    
});