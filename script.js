const API_KEY = "api_key=d098ea827529c13f4c8053f69c7d3553";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const myList = document.getElementsByClassName("addButton");

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, overview, genre_ids } = movie;
    const movieTile = document.createElement("div");
    movieTile.classList.add("movie");
    movieTile.innerHTML = `
        
        <div class="poster">
            <img src="${IMG_URL + poster_path}" alt="${title}">
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        </div>
            <div class="movieInfo">
                <h3>${title}</h3>
                <div style = "display:flex; justify-content:space-between; align-items:center;">
                </div>
            </div>

        `;
    main.appendChild(movieTile);
  });
}

// <button class="addButton">+</button>
{/* <span class="genre">${genre_ids}</span> */}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(searchURL + "&query=" + searchTerm);
  } else {
    getMovies(API_URL);
  }
});

myList.addEventListener("submit", (e) => {
  e.preventDefault();

  nameTile.classList.add("movie");
  nameTile.innerHTML = `
        <div class = "posterIcon'
        <img src="${IMG_URL + poster_path}" alt="e">
    
    
    `;
});
