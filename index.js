import express from "express";
import "dotenv/config";
import myMovies from "./data/movieData.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

app.get("/", (request, response) => response.send("hello World"));

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
});

app.post("/movies", (request, response) => {
  console.log(request.body);
  const movie = {
    id: parseInt(request.body.id),
    title: request.body.title,
    year: parseInt(request.body.year),
  };
  myMovies.push(movie);
  response.json(movie);
  console.log(myMovies);
});

app.put("/movies/:id", (request, response) => {
  const id = request.params.id;
  const movie = myMovies.find((movie) => movie.id == id);
  if (movie) {
    movie.title = request.body.title;
    movie.year = request.body.year;
    response.json(movie);
  } else {
    response.status(404).send("Movie not found");
  }
});
app.listen(port, () => {
  console.log("Server is running on port 8000 ");
});
