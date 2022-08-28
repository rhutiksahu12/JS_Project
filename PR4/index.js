const image = document.getElementsByClassName("image");
let gallery = document.querySelector(".movies");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "22409d5410mshcda7b205e71ddafp1aee58jsn828dd87255fa",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

const getmovies = async () => {
  const resp = await fetch(APIURL, options);
  const data = await resp.json();
  return data;
};
const APIURL = "https://movies-app1.p.rapidapi.com/api/movies";

let moviesdata = getmovies();
moviesdata.then(function (result) {
  moviesdata = result.results;
  console.log(moviesdata);
  moviesdata.forEach((movie) => {
    const img = document.createElement("img");
    img.src = movie.image;
    gallery.appendChild(img);
    img.classList.add("img");
    index = movie.uuid;

    img.id = index;
  });
});




