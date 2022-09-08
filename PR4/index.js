const image = document.getElementsByClassName("image");
let gallery = document.querySelector(".movies");
const APIURL = "./data.json";
const search = document.querySelector(".searchbox");
// let moviesdata;
const sorting = document.getElementById("rating");
let allMovies = [];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "22409d5410mshcda7b205e71ddafp1aee58jsn828dd87255fa",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

const getmovies = async () => {
  const resp = await fetch(APIURL);
  const data = await resp.json()

  return data;
};



let moviesdata = getmovies();

moviesdata.then(function (result) {
  moviesdata = result;
  console.log(moviesdata);

  moviesdata.forEach((movie) => {
    const { title, image, uuid, genres, rating, release } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movieEl");
    movieElement.innerHTML = `
    <img src="${image}" class="img" id=${uuid}/>
    <div class="movietitle">
      <h3 data-title='${title}'>${title}</h3>
      <span>${rating}</span>
    </div>`;


    document.querySelector(".movies").appendChild(movieElement);
    // return {title: title, rating: rating, uuid: uuid, genres: genres,rating: rating, release: release};
      
    
  });


});

search.addEventListener("input", (e) => {
  const searchresult = e.target.value;
  const allMovies = document.querySelectorAll(".movieEl");
  allMovies.forEach((movie) => {
    // console.log(movie.children[1].children[0].textContent)
    const isVisible = movie.children[1].children[0].textContent
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
    // movie.children[1].toggle('hide', !isVisible);
    movie.classList.toggle("hide", !isVisible);
    // console.log(movie);

  });
});

let movies= [];
// moviesdata.then(function(data){
//   moviesdata = data;
//   sorting.addEventListener('change', function (event) {
//     const value = event.target.value;
//     const allMovies = document.querySelectorAll('.movietitle');
//     allMovies.forEach(function (movie) {
  
//       movies.push(movie.children[0].textContent);
//       movies.sort();
//       movies.forEach(function (movie) {

//       })
  
      
//     })
  
  
//   });
  
// })


// sorting.addEventListener('change', function (event) {
//   const value = event.target.value;
//   const allMovies = document.querySelectorAll('.movietitle');
//   allMovies.forEach(function (movie) {

//     movies.push(movie.children[0].textContent);
//     movies.sort();
//     console.log(movies);

    
//   })


// });

