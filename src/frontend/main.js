import { getMoviesFromApi } from "./api.js";

// const helloWorldData = await helloWorldApiResponse.json();
const getMoviesFromApiResult = await getMoviesFromApi()
const movies = await getMoviesFromApiResult.json()
// const { message } = helloWorldData;
console.log(movies)

// const body = document.querySelector('body');
// var paragraph = document.createElement('p');
// paragraph.innerText = `Message from API: '${message}'`;
// body.appendChild(paragraph);
