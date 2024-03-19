import express from "express";
import "dotenv/config";

const app = express();

const myMovies = [
  {
    id: 1,
    title: "The Bodyguard",
    year: "1998",
  },
  {
    id: 2,
    title: "Scar-face",
    year: "1994",
  },
  {
    id: 3,
    title: "Heat",
    year: "2000",
  },

  {
    id: 4,
    title: "Terminator",
    year: "1998",
  },
];
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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
