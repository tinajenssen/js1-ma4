const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

async function makeApiCall(){

  try{
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    const games = json.results;

    games.forEach(function(game) {
        resultsContainer.innerHTML += `<a href="question3.html?id=${game.id}" class="card">
                                          <div class="image" style="background-image: url(${game.background_image});"></div>
                                            <div class="details">
                                              <h4>${game.name}</h4>
                                              <h5> Released: ${game.released}</h5>
                                            </div>
                                      </a>`;
      });

    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = (error);
    }

}

makeApiCall();
