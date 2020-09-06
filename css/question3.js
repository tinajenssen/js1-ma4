const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.rawg.io/api/games/" + id;

async function fetchGame() {

  try{
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  }
  catch(error){
    console.log(error);
    detailsContainer.innerHTML = (error);
  }
}

fetchGame();

function createHtml(details) {
  detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" style="background-image: url(${details.background_image});"></div>
                                <div class="released-date">Released: ${details.released}</div>
                                <div class="rating">Rating: ${details.rating}</div>
                                <p>${details.description}</p>`


}
