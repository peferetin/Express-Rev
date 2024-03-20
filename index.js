import express from "express";
import "dotenv/config";
import myMovies from "./data/movieData.js";

const app = express();

// movies got imported from movieData.js

// const myMovies = [
//   {
//     id: 1,
//     title: "The Bodyguard",
//     year: "1998",
//   },
//   {
//     id: 2,
//     title: "Scar-face",
//     year: "1994",
//   },
//   {
//     id: 3,
//     title: "Heat",
//     year: "2000",
//   },

//   {
//     id: 4,
//     title: "Terminator",
//     year: "1998",
//   },
// ];
app.get("/", (request, response) => response.send("hello World"));
console.log(myMovies);

app.get("/movies", (request, response) => {
  response.json(myMovies);
});

app.get("/movies/:id", (request, response) => {
  const id = request.params.id;
  const movie = myMovies.find((movie) => movie.id == id);
  if (movie) {
    response.json(movie);
  } else {
    response.status(404).send("Movie not found");
  }

  //   const movie = myMovies.find((movie) => movie.id === parseInt(id));

  //   if (movie) {
  //     response.json(movie);
  //   } else {
  //     response.status(404).send("Movie not found");
  //   }
});

app.post("/movies", (request, response) => {
  const movie = request.body;
  myMovies.push(movie);
  response.send(movie);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
