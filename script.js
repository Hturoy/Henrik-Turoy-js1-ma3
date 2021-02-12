


// Oppgave 1

// function division(a, b) {    
//     return a % b;
// }

const divisions = (a, b) => {
    return a % b
};



// Oppgave 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

const thediv = document.querySelector(".thediv");

listGames = (games) => {
    console.log(games);
    thediv.innerHTML = "";
    for (let i of games.results) {
      if(i.name === "[Unreal Engine] Wild Life"){
        break
      }

      let newDiv = `
        <ul>
            <h2>${i.name}</h2>
            <li><p>${i.rating}</p></li>
            <li><p>${i.tags.length}</p></li>
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